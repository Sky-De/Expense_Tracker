import { connectDB } from "./connectDB";
import express, { Request, Response } from "express";

const env = require("dotenv");
const cors = require("cors");
// const express = require("express");

env.config();
const app = express();

app.use(cors());
app.get("/", (req: Request, res: Response) =>
  res.send("Welcome to my TypeScript express server")
);

const PORT = process.env.PORT || 2323;
connectDB()
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`))
  )
  .catch((err) => console.log(err));
