import { transformCustomDateRecursive } from "../utils/custom-date/transform-recursive";

import type {
  GraphQLRequestContext,
  GraphQLResponse,
} from "apollo-server-core";

interface FormatResponse {
  (
    response: GraphQLResponse,
    context: GraphQLRequestContext
  ): GraphQLResponse | null;
}

export const formatResponse: FormatResponse = (response) => {
  const transformed = transformCustomDateRecursive(response.data);
  if (typeof transformed === "object") {
    response.data = transformed;
  }

  return response;
};
