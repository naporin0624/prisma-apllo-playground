/* eslint-disable no-console */
import { gql, useMutation } from "@apollo/client";
import { datasource, useReadData } from "@naporin0624/react-flowder";
import { startTransition, useCallback, useState } from "react";
import { Observable, tap, map } from "rxjs";

import { client } from "../adapter/apollo";

import type { Query, QueryTodosArgs } from "../graphql";
import type {
  TypedDocumentNode,
  ApolloQueryResult,
  QueryOptions,
} from "@apollo/client";
import type { ChangeEventHandler } from "react";

const query: TypedDocumentNode<Pick<Query, "todos">, QueryTodosArgs> = gql`
  query Todos($where: TodoWhereInput) {
    todos(where: $where) {
      id
      title
      body
      expiredAt
      createdAt
      updatedAt
      author {
        name
      }
    }
  }
`;
const mutation = gql`
  mutation CreateOneTodo($data: TodoCreateInput!) {
    createOneTodo(data: $data) {
      id
    }
  }
`;

const todos$ = (
  options?: Omit<QueryOptions<QueryTodosArgs, Pick<Query, "todos">>, "query">
) =>
  new Observable<ApolloQueryResult<Pick<Query, "todos">>>((subscriber) => {
    // client watchQuery の挙動について調査する
    const watcher = client.watchQuery({ query, ...options });

    const subscription = watcher.subscribe({
      next: (value) => {
        subscriber.next(value);
      },
      error: (err) => {
        subscriber.error(err);
      },
      complete: () => {
        subscriber.complete();
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }).pipe(
    map((x) => x.data),
    tap((result) => {
      console.log("@query", options);
      console.log("@result", result);
    })
  );
const todosDatasource = datasource(todos$);

const Page = () => {
  const [startsWith, setStartsWith] = useState("");
  const handleStartsWithChange: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      startTransition(() => {
        setStartsWith(e.target.value);
      });
    }, []);

  const { todos } = useReadData(
    todosDatasource({
      context: { debounceKey: "1" },
      variables: { where: { title: { startsWith } } },
    })
  );

  const [handler] = useMutation(mutation, { refetchQueries: [query] });
  const create = useCallback(() => {
    handler({
      variables: {
        data: {
          title: "napo",
          body: "chaan",
          expiredAt: "2006-04-13T14:12:53.4242+05:30",
          author: {
            connectOrCreate: {
              create: {
                name: "naporitan",
              },
              where: {
                id: 1,
              },
            },
          },
        },
      },
    });
  }, [handler]);

  return (
    <section>
      <h2>Index</h2>
      <fieldset>
        <label id="title" htmlFor="title">
          title
        </label>
        <input type="text" onChange={handleStartsWithChange} id="title" />
      </fieldset>
      <button onClick={create}>create</button>
      <p style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(todos, null, 2)}</p>
    </section>
  );
};

export default Page;
