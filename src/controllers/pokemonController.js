const express = require("express");

const router = express.Router();
const {PokemonData} = require("../models/pokemonModel");
const { mongoose } = require("mongoose");

require("dotenv").config();



async function findOnePokemon(query){
    // says to populate the field author
    // assumes the populate query is a document from another collection
    let result = await PokemonData.findOne(query);
    return result;
}

// pokemon/search/:pokemonName
router.get("/search/:pokemonName", async (request, response) => {
    try {
        // Extract the `pokemonName` parameter from the request
        let result = request.params.pokemonName;
        console.log("Searching for: " + result);

        // Query the database for a Pokémon by its name (case-insensitive)
        let pokemon = await PokemonData.findOne({ name: result.toLowerCase() });

        // If no Pokémon is found, return a 404 error
        if (!pokemon) {
            return response.status(404).json({ message: `Pokemon '${result}' not found.` });
        }

        // Return the Pokémon document if found
        response.status(200).json(pokemon);
    } catch (error) {
        console.error("Error retrieving Pokémon:", error);
        // Handle any errors that occur during the query
        response.status(500).json({ message: "Error retrieving Pokémon", error: error.message });
    }
});

// Export router for app to use
// Tells the app instance to load up routers
module.exports = router;
