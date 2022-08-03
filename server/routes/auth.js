import express from "express";
const authRouter = express.Router();
import { registerValidation, loginValidation } from "../validation.js";
import User from "../models/user-models.js";
import jwt from "jsonwebtoken";

authRouter.use((req, res, next) => {
  console.log("A Request is coming in to auth.js");
  next();
});

authRouter.get("/testAPI", (req, res) => {
  const msgObj = {
    message: "Test API is working"
  };
  return res.json(msgObj);
});

authRouter.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // check if the user exist
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send("Email has been register");
  } else {
    // create new user in database
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    });
    try {
      const saveUser = await newUser.save();
      res.status(200).send({
        mes: "success",
        saveObject: saveUser
      });
    } catch (err) {
      console.log(err);
      res.status(400).send("User not saved");
    }
  }
});

authRouter.post("/login", (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.status(400).send(err);
    }
    if (!user) {
      res.status(401).send("Cannot found user");
    } else {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) {
          return res.status(400).send(err);
        }
        if (isMatch) {
          const tokenObject = { _id: user._id, email: user.email };
          const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
          res.send({ success: true, token: "JWT " + token, user });
        } else {
          console.log(err);
          res.status(401).send("Password is wrong!!!!!");
        }
      });
    }
  });
});

export default authRouter;
