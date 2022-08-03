import express from "express";
const app = express();
import mongoose from "mongoose";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
import authRouter from "./routes/auth.js";

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((e) => {
    console.log(e);
  });

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", authRouter);

app.listen(8080, () => {
  console.log("Server is running on the port 8080");
});
