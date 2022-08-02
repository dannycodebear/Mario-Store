import express from "express";
const router = express.Router();

export default function exportAuthRouter() {
  router.use((req, res, next) => {
    console.log("A Request is coming in to auth.js");
    next();
  });

  router.get("/testAPI", (req, res) => {
    const msgObj = {
      message: "Test API is working"
    };
    return res.json(msgObj);
  });

  return router;
}
