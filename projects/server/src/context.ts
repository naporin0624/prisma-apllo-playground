import { PrismaClient } from "@prisma/client";

import { logger } from "./logger";
import { transformDateRecursive } from "./prisma/middleware";

import type { Logger } from "log4js";

export interface ExternalContext {
  prisma: PrismaClient;
  logger: Logger;
}

const prisma = new PrismaClient();
prisma.$use(transformDateRecursive);

export const externalContext: ExternalContext = {
  prisma: prisma,
  logger,
};
