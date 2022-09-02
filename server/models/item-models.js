import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },

  avatar: {
    type: Buffer,
    required: true
  }
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
