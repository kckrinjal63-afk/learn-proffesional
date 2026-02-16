// kckrinjal63_db_user
// 4qcNl2Xf8OauooWk

const mongoose = require("mongoose")

const DB_URL = "mongodb+srv://kckrinjal63_db_user:4qcNl2Xf8OauooWk@cluster0.yzomlkm.mongodb.net/"
const connectDB = async () => {

    try{
       await  mongoose.connect(DB_URL);
       console.log("Database is  connected ");
    }catch (error) {
        console.log("Database connection error is ${error}")
    }
}

console.log("hello world");

module.exports = connectDB;
