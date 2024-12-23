const { dbConnect, dbDisconnect } = require("../functions/dbFunctions");
const dropCollection = require("./dropPokemonCollection"); // Assuming the function is in dropCollection.js
const mongoose = require("mongoose");

// Connect to MongoDB
// This drops the whole collection containing the data seeded from the pokemon api
// (The first 151 pokemon in the pokedex)
async function dropPokemonDatas(){
    dbConnect().then(await mongoose.connection.dropCollection(`pokemondatas`))
    // Drop a specific collection
    console.log("success");

    dbDisconnect();
}

dropPokemonDatas();