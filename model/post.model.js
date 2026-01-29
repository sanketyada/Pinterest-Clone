const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    postText: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now, // auto current date & time
    },
    like:{
        type:Array,
        default:[]
    }
  }
);

module.exports = mongoose.model("Post", postSchema);
