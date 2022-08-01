import express from "express";
const app = express();
import mongoose from "mongoose";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 2
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));

async function test() {
  let url = "https://jsonplaceholder.typicode.com/posts/2";
  let data = await fetch(url);
  let data2 = await data.json();
  console.log(data2);
}

test();

// app.get("/test", async (req, res) => {
//   let url = "https://jsonplaceholder.typicode.com/posts/1";

//   await fetch(url)
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// });

app.listen(8080, () => {
  console.log("Server is running on the port 8080");
});
