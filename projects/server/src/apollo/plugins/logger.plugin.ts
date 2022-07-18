import type { PluginDefinition } from "apollo-server-core";
export const loggerPlugin: PluginDefinition = {
  async requestDidStart({ logger }) {
    return {
      async didResolveOperation(_requestContext) {
        logger.debug(_requestContext.source);
      },
    };
  },
};
