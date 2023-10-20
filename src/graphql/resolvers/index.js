import { resolvers as AccountQuery } from "./account/Query/resolvers.js";
import { resolvers as HelloWordlQuery } from "./helloWorld/Query/resolvers.js";

const resolvers = {
  Query: {
    ...AccountQuery,
    ...HelloWordlQuery,
  },
};

export default resolvers;
