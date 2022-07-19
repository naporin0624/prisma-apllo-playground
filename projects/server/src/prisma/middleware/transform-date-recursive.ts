import { transformCustomDateRecursive } from "../../utils/custom-date/transform-recursive";

import type { Prisma } from "@prisma/client";

export const transformDateRecursive: Prisma.Middleware<unknown> = async (
  params,
  next
) => {
  return transformCustomDateRecursive(await next(params));
};
