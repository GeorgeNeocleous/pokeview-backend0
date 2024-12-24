const mongoose = require("mongoose");
const fetch = require("node-fetch");

// Fetch a single Pokémon by ID
async function fetchPokemonById (id){
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemon = await response.json();
  
      // Structure the Pokémon data
      return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map((type) => type.type.name),
        sprites: {
          front_default: pokemon.sprites.front_default,
          front_shiny: pokemon.sprites.front_shiny,
          back_default: pokemon.sprites.back_default,
          back_shiny: pokemon.sprites.back_shiny,
        },
        stats: {
          hp: pokemon.stats.find((stat) => stat.stat.name === "hp").base_stat,
          attack: pokemon.stats.find((stat) => stat.stat.name === "attack").base_stat,
          defense: pokemon.stats.find((stat) => stat.stat.name === "defense").base_stat,
          special_attack: pokemon.stats.find((stat) => stat.stat.name === "special-attack").base_stat,
          special_defense: pokemon.stats.find((stat) => stat.stat.name === "special-defense").base_stat,
          speed: pokemon.stats.find((stat) => stat.stat.name === "speed").base_stat,
        },
        likeCount:0,
      };
    } catch (error) {
      console.error(`Error fetching Pokémon with ID ${id}:`, error.message);
      return null;
    }
  };
  
async function findOnePokemon(query){
    // says to populate the field author
    // assumes the populate query is a document from another collection
    let result = await PokemonData.findOne(query);
    return result;
}

  // Fetch the first 151 Pokémon
async function fetchFirst151Pokemon(){
    const allPokemon = [];
    for (let id = 1; id <= 151; id++) {
      const pokemon = await fetchPokemonById(id);
      if (pokemon) allPokemon.push(pokemon);
    }
    return allPokemon;
    ;
};

// Run the seeding function

  module.exports = {
    fetchPokemonById, fetchFirst151Pokemon
  }