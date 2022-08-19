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
  // Buffer 可以儲存2進位的照片資料
  avatar: {
    type: Buffer
  }
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
