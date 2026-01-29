const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const ConnectToDB = require("./config/db")
ConnectToDB()
const UserModel = require("./model/user.model")

app.get("/",(req,res)=>{
  res.send("App is Listening")
})


app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
