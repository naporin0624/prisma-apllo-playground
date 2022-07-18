import "reflect-metadata";
import { join } from "path";

import { resolvers } from "@generated/type-graphql";
import { ApolloServer } from "apollo-server";
import { RedisCache } from "apollo-server-cache-redis";
import { createComplexityLimitRule } from "graphql-validation-complexity-types";
import { configure, getLogger } from "log4js";
import { buildSchema } from "type-graphql";

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
  const schema = await buildSchema({
    resolvers: [...resolvers],
    emitSchemaFile: join(__dirname, "./generated-schema.graphql"),
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
