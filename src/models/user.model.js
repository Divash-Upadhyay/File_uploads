const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true }, // _id => MongoID, id => regular id
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    profile_pic: [{ type: String }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema); // user => users

const galleySchema = new mongoose.Schema({
  picture: { type: String, required: true },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const gallery = mongoose.model("post", galleySchema); // user => users

module.exports = {User,gallery};
