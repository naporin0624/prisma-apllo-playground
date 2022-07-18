import { PrismaClient } from "@prisma/client";

import { transformDateRecursive } from "./prisma/middleware";

export interface ExternalContext {
  prisma: PrismaClient;
}

const prisma = new PrismaClient();
prisma.$use(transformDateRecursive);

export const externalContext: ExternalContext = {
  prisma: prisma,
};
