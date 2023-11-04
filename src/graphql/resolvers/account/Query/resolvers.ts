import { v4 as uuidv4 } from "uuid";
import { accounts } from "@/data/accounts";
import { GraphQLError } from "graphql";

export default {
  Query: {
    account: (_, { id }: { id: string }) => {
      const _accounts = Object.values(accounts).flat();
      const acc = _accounts.find((acc) => acc.id === id);
      if (!acc) {
        throw new GraphQLError(`Account ${id} not found`, {
          extensions: { code: "Not Found" },
        });
      }
      return acc;
    },
    accounts: () => Object.values(accounts).flat(),
    countryAccounts: (_, { country }: { country?: string }) => {
      return country ? accounts[country] : accounts.CA;
    },
    rawAccounts: () => accounts,
  },
  Account: {
    _id: () => uuidv4(),
  },
};
