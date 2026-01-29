const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    fullname: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // reference to Post model
      },
    ],
    dp:{
        type:String
    }
  },
  {
    timestamps: true, // createdAt & updatedAt automatically
  },
);

module.exports = mongoose.model("User", userSchema);
