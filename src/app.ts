import { ApolloServer, BaseContext } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import cors from "cors";
import "dotenv/config";
import express from "express";
import { Request as JWTRequest, expressjwt } from "express-jwt";
import * as jwt from "jsonwebtoken";
import resolvers from "./graphql/resolvers/index";
import typeDefs from "./graphql/schema/index";

const app = express();
app.use(cors(), express.json());

// JWT
app.use(
  "/protected",
  expressjwt({
    secret: process.env.JWT_SECRET as jwt.Secret,
    algorithms: [process.env.JWT_ALG as jwt.Algorithm],
  })
);
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("Unauthorized Access");
  } else {
    next(err);
  }
});

app.get("/", (req, res) => {
  return res.json({
    token: jwt.sign({ username: "Mock User" }, process.env.JWT_SECRET, {
      algorithm: process.env.JWT_ALG as jwt.Algorithm,
    }),
  });
});

app.get("/protected", (req: JWTRequest, res) => {
  res.send("Authorized access!");
});

const setGraphQL = async () => {
  // GraphQL
  const apolloServer = new ApolloServer<BaseContext>({ typeDefs, resolvers });
  await apolloServer.start();
  app.use("/graphql", apolloMiddleware(apolloServer));
};

setGraphQL();

export default app;
