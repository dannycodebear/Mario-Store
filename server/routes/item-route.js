import express from "express";
const itemRouter = express.Router();
import { itemValidation } from "../validation.js";
import Item from "../models/item-models.js";

itemRouter.use((req, res, next) => {
  console.log("A Request is coming into api");
  next();
});

// add new item route
itemRouter.post("/", async (req, res) => {
  const { error } = itemValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { id, name, description, price } = req.body;
  if (req.user.isMember()) {
    return res.status(400).send("Only admin can add new items");
  }

  const newItem = new Item({
    id,
    name,
    description,
    price
  });

  try {
    await newItem.save();
    res.status(200).send("New item has been saved.");
  } catch (err) {
    res.status(400).send("Error");
    console.log(err);
  }
});

export default itemRouter;
