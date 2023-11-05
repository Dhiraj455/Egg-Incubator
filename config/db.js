const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

try {
    mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected successfully");
} catch (err) {
    console.log("Error", err);
}