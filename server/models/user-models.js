import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 100
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 1024
  },
  role: {
    type: String,
    enum: ["admin", "member"],
    required: true
  }
});

// checked role
userSchema.methods.isAdmin = function () {
  return this.role == "admin";
};

userSchema.methods.isMember = function () {
  return this.role == "member";
};

// middleware
userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (cb, isMatch) => {
    if (err) {
      return cb(err, isMatch);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema);
