const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const MongoUrl = process.env.MONGODB_URL;

const connectMongoDB = async () => {
    try {
        await mongoose.connect(MongoUrl);
        console.log("Database connected!");
    } catch (e){
        console.error("Internal Database Error");
    }
}

connectMongoDB();

module.exports = { connectMongoDB };