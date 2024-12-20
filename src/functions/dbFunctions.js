const mongoose = require("mongoose");

async function dbConnect() {
    let databaseURL = process.env.DATABASE_URL || `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;
    await mongoose.connect(databaseURL);
    console.log("Connected to db at " + databaseURL);
}
// Create a way for the db to disconnect for the testing environment

module.exports = {
    dbConnect
}
