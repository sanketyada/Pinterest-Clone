const mongoose =require("mongoose")

const ConnectToDB = ()=>{
    const connection = mongoose.connect("mongodb://localhost:27017/Pintrest").then(()=>{
        console.log("Database Connected!")
    })
}

module.exports = ConnectToDB;