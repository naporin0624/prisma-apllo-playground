import "reflect-metadata";
import { join } from "path";

import { resolvers as generetedResolvers } from "@generated/type-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server";
import { RedisCache } from "apollo-server-cache-redis";
import {
  resolvers as scalarResolvers,
  typeDefs as scalarTypeDefs,
} from "graphql-scalars";
import { createComplexityLimitRule } from "graphql-validation-complexity-types";
import { configure, getLogger } from "log4js";
import { buildTypeDefsAndResolvers } from "type-graphql";

import { loggerPlugin } from "./apollo/plugins";
import { externalContext } from "./context";

configure({
  appenders: {
    console: {
      type: "console",
      level: "all",
    },
  },
  categories: {
    default: {
      appenders: ["console"],
      level: "all",
    },
  },
});
const logger = getLogger();

const bootstrap = async () => {
  const { resolvers, typeDefs } = await buildTypeDefsAndResolvers({
    resolvers: [...generetedResolvers],
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
    formatResponse(response) {
      return response;
    },
  });

  server.listen({ host: "0.0.0.0", port: 4000 }, () =>
    // eslint-disable-next-line no-console
    console.log(`🚀 Server ready at: http://localhost:4000`)
  );
};

bootstrap();
