import type { ApplicationContext } from "../..";
import type { MiddlewareFn } from "type-graphql";

export const MutationInterceptorMiddleware: MiddlewareFn<
  ApplicationContext
> = async ({ args, info, context: { logger } }, next) => {
  logger.debug(info.fieldName, args);

  await next();
};
