import { ApolloServer, BaseContext } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./graphql/resolvers/index";
import typeDefs from "./graphql/schema/index";

const main = async () => {
  const server = new ApolloServer<BaseContext>({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 9000 },
  });
  console.log(`🚀  Server ready at ${url}`);
};

main();
