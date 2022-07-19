import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { withScalars } from "apollo-link-scalars";
import { buildClientSchema } from "graphql";
import { DateTimeResolver } from "graphql-scalars";

import introspectionQuery from "../graphql.schema.json";

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

const link = ApolloLink.from([withScalars({ schema, typesMap }), httpLink]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
