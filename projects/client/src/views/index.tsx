import { gql, useMutation } from "@apollo/client";
import { useSyncQuery } from "@naporin0624/react-flowder/apollo";
import { startTransition, useCallback, useState } from "react";

import type { Query, QueryTodosArgs } from "../graphql";
import type { TypedDocumentNode } from "@apollo/client";
import type { ChangeEventHandler } from "react";

const query: TypedDocumentNode<Pick<Query, "todos">, QueryTodosArgs> = gql`
  query Todos($where: TodoWhereInput!) {
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

const Page = () => {
  const [startsWith, setStartsWith] = useState("");
  const handleStartsWithChange: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      startTransition(() => {
        setStartsWith(e.target.value);
      });
    }, []);

  const { todos } = useSyncQuery(query, {
    variables: {
      where: {
        title: {
          startsWith,
        },
      },
    },
  });

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
