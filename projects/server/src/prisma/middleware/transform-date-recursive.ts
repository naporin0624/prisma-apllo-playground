import { CustomDate } from "../../utils/custom-date";

import type { Prisma } from "@prisma/client";

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  return !Array.isArray(value) && typeof value === "object" && value !== null;
};

const transform = (target: unknown): unknown => {
  if (target instanceof Date) {
    return new CustomDate(target);
  }

  if (Array.isArray(target)) return target.map(transform);
  if (isPlainObject(target)) {
    const next: Record<string, unknown> = {};
    for (const key in target) {
      next[key] = transform(target[key]);
    }

    return next;
  }

  return target;
};

export const transformDateRecursive: Prisma.Middleware<unknown> = async (
  params,
  next
) => {
  return transform(await next(params));
};
