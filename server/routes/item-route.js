import express from "express";
const itemRouter = express.Router();
import multer from "multer";
import { itemValidation } from "../validation.js";
import Item from "../models/item-models.js";

itemRouter.use((req, res, next) => {
  console.log("A Request is coming into api");

  next();
});

// const storage = multer.diskStorage({
//   // 設定檔案存取位置
//   destination: function (req, file, cb) {
//     cb(null, "public/images");
//   },
//   // 設定檔案命名方式
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// Setting Multer
const upload = multer({
  // storage: storage,
  // 限定上傳大小為2Mb
  limit: {
    fileSize: 2000000
  },
  fileFilter(req, file, cb) {
    // 限定上傳格式只能有這三種副檔名, $ 配對結尾而已
    if (!file.originalname.match(/(png|jpg|jpeg)$/)) {
      cb(new Error("Please upload correct image"));
    }
    cb(null, true);
  }
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
  Item.find({})
    .then((item) => {
      res.send(item);
    })
    .catch((e) => {
      res.send(e);
    });
});

// add new items  (Create)
itemRouter.post("/addItems", upload.single("avatar"), async (req, res, next) => {
  const { error } = itemValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  let { id, title, description, price, avatar } = req.body;
  if (req.user.isMember()) {
    return res.status(400).send("Only admin can add new items");
  }

  Item.avatar = req.path;
  avatar = Item.avatar;

  const newItem = new Item({
    id,
    title,
    description,
    price,
    avatar
  });

  try {
    await newItem.save();
    res.status(200).send(newItem);
  } catch (err) {
    res.status(400).send("Error");
    console.log(err);
  }
  next();
});

// Update items (Update)
itemRouter.patch("/itemsManage/:id", async (req, res) => {
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
itemRouter.delete("/itemsManage/:id", async (req, res) => {
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

// Delete Many items test (Delete)
itemRouter.delete("/itemsManage", (req, res) => {
  Item.deleteMany({})
    .then(() => {
      res.send("Item has been deleted");
    })
    .catch((e) => {
      res.send(e);
    });
});

export default itemRouter;
