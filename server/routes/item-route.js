import express from "express";
const itemRouter = express.Router();
import { itemValidation } from "../validation.js";
import Item from "../models/item-models.js";

itemRouter.use((req, res, next) => {
  console.log("A Request is coming into api");

  next();
});

// search one items (Read)
itemRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  Item.findOne({ id })
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      res.send(err);
    });
});

// search all items (Read)
itemRouter.get("/", (req, res) => {
  Item.findOne({})
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      res.send(err);
    });
});

// add new items  (Create)
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

// Update items (Update)
itemRouter.patch("/:id", async (req, res) => {
  const { error } = itemValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let { id } = req.params;
  let item = await Item.findOne({ id });

  if (!item) {
    return res.status(404).send("Items not found !!");
  }

  if (req.user.isAdmin()) {
    Item.findOneAndUpdate({ id }, req.body, {
      new: true,
      runValidators: true
    })
      .then(() => {
        res.send("Item has been updated");
      })
      .catch((e) => {
        res.send(e);
      });
  } else {
    res.status(403).send("Only admin can edited");
  }
});

// Delete items (Delete)
itemRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const item = await Item.findOne({ id });

  if (!item) {
    return res.status(404).send("Items not found !!");
  }

  if (req.user.isAdmin()) {
    Item.deleteOne({ id })
      .then(() => {
        res.send("Item has been deleted");
      })
      .catch((e) => {
        res.send(e);
      });
  } else {
    res.status(403).send("Only admin can deleted");
  }
});

export default itemRouter;
