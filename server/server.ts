// import { connectDB } from "./connectDB";
// import express, { Request, Response } from "express";
// import env from "dotenv";
// import cors from "cors";

// env.config();
// const app = express();

// app.use(cors());
// app.get("/", (req: Request, res: Response) =>
//   res.send("Welcome to my TypeScript express server")
// );

// const PORT = process.env.PORT || 2323;
// connectDB()
//   .then(() =>
//     app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`))
//   )
//   .catch((err) => console.log(err));

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`Server ready at ${url}`);
