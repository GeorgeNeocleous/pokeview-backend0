const express = require("express");
const PokemonData = require("../models/pokemonModel");

const router = express.Router();

async function findOnePokemon(query){
    // says to populate the field author
    // assumes the populate query is a document from another collection
    let result = await PokemonData.findOne(query);
    return result;
}

router.get("/search/:pokemonName", async (request, response) => {
    console.log("Searching for:" + request.params.pokemonName);
    findOnePokemon
    response.json({
        message:"test success"
    });
    // // Uses crud operation
    // let result = await findOnePokemon({name: request.params.pokemonName});
    // // Creates a query params based on what arguments are given in the route (postId)
    // // result is saved and then sent back as a response

    // console.log("Found post with data of: " + JSON.stringify(result));
    
    // response.json({
    //     data:result
    // })
})

