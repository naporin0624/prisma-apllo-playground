import type { PluginDefinition } from "apollo-server-core";
export const loggerPlugin: PluginDefinition = {
  async requestDidStart() {
    return {
      async didResolveOperation() {
        //
      },
    };
  },
};
