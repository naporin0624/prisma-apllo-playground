import type { ApplicationContext } from "../..";
import type { MiddlewareFn } from "type-graphql";

export const ResolveTimeMiddleware: MiddlewareFn<ApplicationContext> = async (
  { info, context: { logger } },
  next
) => {
  const start = Date.now();
  await next();
  const resolveTime = Date.now() - start;

  logger.debug(`${info.parentType.name}.${info.fieldName} [${resolveTime} ms]`);
};
