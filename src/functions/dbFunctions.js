const mongoose = require("mongoose");

const { fetchFirst151Pokemon } = require("../models/pokemonModel");
require("dotenv").config();

async function dbConnect() {
    let databaseURL = `mongodb://127.0.0.1:27017/${process.env.npm_package_name}` || process.env.DATABASE_URL;
    await mongoose.connect(databaseURL);
    console.log("Connected to db at " + databaseURL);
}
// Create a way for the db to disconnect for the testing environment
 async function dbDisconnect(){
    // await mongoose.disconnect()
    // process.exit will try to brute force close the db interupting processes
    // Graceful disconnect from MongoDB
    console.log("Disconnecting from database: " + databaseURL);
     
    await mongoose.connection.close();
    console.log("Disconnect successful");
 }


module.exports = {
    dbConnect, dbDisconnect
}
