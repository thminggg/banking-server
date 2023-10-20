import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import resolvers from "./graphql/resolvers/index.js";
import typeDefs from "./graphql/schema/index.js";

const PORT = 9000;

const app = express();
app.use(cors(), express.json());

const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();
app.use("/graphql", apolloMiddleware(apolloServer));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});
