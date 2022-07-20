import "reflect-metadata";
import { join } from "path";

import {
  resolvers as generatedResolvers,
  applyResolversEnhanceMap,
} from "@generated/type-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server";
import { RedisCache } from "apollo-server-cache-redis";
import {
  resolvers as scalarResolvers,
  typeDefs as scalarTypeDefs,
} from "graphql-scalars";
import { createComplexityLimitRule } from "graphql-validation-complexity-types";
import { buildTypeDefsAndResolvers, UseMiddleware } from "type-graphql";

import { formatResponse } from "./apollo/formatResponse";
import { loggerPlugin } from "./apollo/plugins";
import { externalContext } from "./context";
import {
  MutationInterceptorMiddleware,
  ResolveTimeMiddleware,
} from "./graphql/middleware";

import type { ExternalContext } from "./context";
import type { User } from "@generated/type-graphql";

export type ApplicationContext = ExternalContext & {
  currentUser?: User;
};

export const config = {
  port: 4000,
  host: "localhost",
  protocol: "http",
};

applyResolversEnhanceMap({
  Todo: {
    createOneTodo: [UseMiddleware(MutationInterceptorMiddleware)],
    deleteManyTodo: [UseMiddleware(MutationInterceptorMiddleware)],
  },
});

const bootstrap = async () => {
  const { resolvers, typeDefs } = await buildTypeDefsAndResolvers({
    resolvers: [...generatedResolvers],
    emitSchemaFile: join(__dirname, "./generated-schema.graphql"),
    globalMiddlewares: [ResolveTimeMiddleware],
  });

  const schema = makeExecutableSchema({
    typeDefs: [typeDefs, scalarTypeDefs],
    resolvers: [resolvers, scalarResolvers],
  });

  const server = new ApolloServer({
    schema,
    context: async (): Promise<ApplicationContext> => {
      const user = await externalContext.prisma.user.findFirst();

      return {
        ...externalContext,
        currentUser: user ?? undefined,
      };
    },
    csrfPrevention: true,
    cache: new RedisCache({ host: "localhost", port: 6379 }),
    validationRules: [createComplexityLimitRule(1000)],
    plugins: [loggerPlugin],
    healthCheckPath: "/health-check",
    logger: externalContext.logger,
    formatResponse,
  });

  server.listen(config);
};

bootstrap();
