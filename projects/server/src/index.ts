import "reflect-metadata";
import { join } from "path";

import { resolvers as generatedResolvers } from "@generated/type-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server";
import { RedisCache } from "apollo-server-cache-redis";
import {
  resolvers as scalarResolvers,
  typeDefs as scalarTypeDefs,
} from "graphql-scalars";
import { createComplexityLimitRule } from "graphql-validation-complexity-types";
import { buildTypeDefsAndResolvers } from "type-graphql";

import { formatResponse } from "./apollo/formatReponse";
import { loggerPlugin } from "./apollo/plugins";
import { externalContext } from "./context";
import { logger } from "./logger";

import type { ExternalContext } from "./context";

export type ApplicationContext = ExternalContext;

export const config = {
  port: 4000,
  host: "localhost",
  protocol: "http",
};

const bootstrap = async () => {
  const { resolvers, typeDefs } = await buildTypeDefsAndResolvers({
    resolvers: [...generatedResolvers],
    emitSchemaFile: join(__dirname, "./generated-schema.graphql"),
  });
  const schema = makeExecutableSchema({
    typeDefs: [typeDefs, scalarTypeDefs],
    resolvers: [resolvers, scalarResolvers],
  });

  const server = new ApolloServer({
    schema,
    context: externalContext,
    csrfPrevention: true,
    cache: new RedisCache({ host: "localhost", port: 6379 }),
    validationRules: [createComplexityLimitRule(1000)],
    plugins: [loggerPlugin],
    healthCheckPath: "/health-check",
    logger,
    formatResponse,
  });

  server.listen(config);
};

bootstrap();
