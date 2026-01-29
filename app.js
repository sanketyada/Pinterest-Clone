const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const ConnectToDB = require("./config/db");
ConnectToDB();
const User = require("./model/user.model");
const Post = require("./model/post.model");

app.get("/", (req, res) => {
  res.send("App is Listening");
});

app.get("/findUser", async (req, res) => {
  const user = await User.findOne({ _id: "697b6fff5f21c8fa75434de1" }).populate("posts")
  res.send(user);
});

app.get("/createUser", async (req, res) => {
  const newUser = await User.create({
    username: "Sanket Yadav",
    password: "12345678",
  });
  res.send(newUser);
});

app.get("/createPost", async (req, res) => {
  const newpost = await Post.create({
    postText: "Jai hoi !",
    author: "697b6fff5f21c8fa75434de1",
  });

  const Userfind = await User.findOne({ _id: "697b6fff5f21c8fa75434de1" });
  Userfind.posts.push(newpost._id);
  Userfind.save();

  console.log(Userfind);
  res.send(newpost);
});

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
