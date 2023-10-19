import { accounts } from "./data/accounts.mjs";

export const resolvers = {
  Query: {
    greeting: () => "Hello world!",
    accounts: () => {
      return accounts.CA;
    },
  },
};
