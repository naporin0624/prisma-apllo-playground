import { config } from "../..";

import type { PluginDefinition } from "apollo-server-core";

export const loggerPlugin: PluginDefinition = {
  async serverWillStart(context) {
    context.logger.info(
      `🚀 Server ready ${config.protocol}://${config.host}:${config.port}`
    );
  },
};
