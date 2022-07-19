import { HttpLink, ApolloLink } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { withScalars } from "apollo-link-scalars";
import { buildClientSchema } from "graphql";
import { DateTimeResolver } from "graphql-scalars";

import introspectionQuery from "../../graphql.schema.json";

import type { IntrospectionQuery } from "graphql";

const schema = buildClientSchema(
  introspectionQuery as unknown as IntrospectionQuery
);

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const typesMap = {
  DateTime: DateTimeResolver,
};

/** @package */
export const link = ApolloLink.from([
  new RetryLink({
    delay: {
      initial: 300,
      max: Infinity,
      jitter: true,
    },
    attempts: {
      max: 5,
      retryIf: (error) => !!error,
    },
  }),
  withScalars({ schema, typesMap }),
  // new DebounceLink(1000),
  httpLink,
]);
