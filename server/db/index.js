const mongoose = require('mongoose');
const  dotenv = require('dotenv');
dotenv.config();

const mongoUrl = process.env.MONGODB;

const mongoConnect = async () => {
    try{
        await mongoose.connect(mongoUrl);
        console.log("DB Connected!");
    }catch (e) {
        console.log("Internal Database Error!");
    }
}

mongoConnect();

module.exports = { mongoConnect };