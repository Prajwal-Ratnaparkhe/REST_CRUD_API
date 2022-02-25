const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    city:String,
    country:String

});

module.exports = mongoose.model("User",userSchema);