import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },

  avatar: {
    type: Buffer
  }
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
