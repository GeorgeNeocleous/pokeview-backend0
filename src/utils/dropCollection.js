const { dbConnect, dbDisconnect } = require("../functions/dbFunctions");
const dropCollection = require("./dropCollection"); // Assuming the function is in dropCollection.js
const mongoose = require("mongoose");

// Connect to MongoDB
async function dropPokemonDatas(){
    dbConnect().then(await mongoose.connection.dropCollection(`pokemondatas`))
    // Drop a specific collection
    console.log("success");

    dbDisconnect();
}

dropPokemonDatas();