const mongoose = require("mongoose");
const fetch = require("node-fetch");
const { dbConnect } = require("../functions/dbFunctions");

// Fetch a single Pokémon by ID
const fetchPokemonById = async (id) => {
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
  
  // Fetch the first 151 Pokémon
  const fetchFirst151Pokemon = async () => {
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