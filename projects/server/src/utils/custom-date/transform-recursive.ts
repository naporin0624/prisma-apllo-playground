import { CustomDate } from ".";

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  return !Array.isArray(value) && typeof value === "object" && value !== null;
};

export const transformCustomDateRecursive = (target: unknown): unknown => {
  if (target instanceof Date) {
    return new CustomDate(target);
  }

  if (Array.isArray(target)) return target.map(transformCustomDateRecursive);
  if (isPlainObject(target)) {
    const next: Record<string, unknown> = {};
    for (const key in target) {
      next[key] = transformCustomDateRecursive(target[key]);
    }

    return next;
  }

  return target;
};
