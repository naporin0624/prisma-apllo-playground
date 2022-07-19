import { configure, getLogger } from "log4js";

export const logger = getLogger();

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
