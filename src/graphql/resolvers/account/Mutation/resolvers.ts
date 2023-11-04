import { v4 as uuidv4 } from "uuid";

export default {
  Mutation: {
    transfer: (
      _,
      { from, to, amount }: { from: string; to: string; amount: number }
    ) => {
      return {
        trackId: uuidv4(),
        from,
        to,
        amount,
      };
    },
  },
};
