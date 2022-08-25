import express from "express";
import bodyParser from "body-parser";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import authRouter from "./routes/auth.js";
import itemRouter from "./routes/item-route.js";
import { pst } from "./config/passport.js";
import passport from "passport";
pst(passport);
import cors from "cors";
import path from "path";

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((e) => {
    console.log(e);
  });

// middleware
app.use(express.static(path.join("public")));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", authRouter);
app.use("/api/items", passport.authenticate("jwt", { session: false }), itemRouter);

app.listen(8080, () => {
  console.log("Server is running on the port 8080");
});
