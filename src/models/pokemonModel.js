const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true, // Ensures no duplicate Pokémon
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  types: {
    type: [String], // Array of strings for Pokémon types
    required: true,
  },
  sprites: {
    front_default: { type: String, required: true },
    front_shiny: { type: String, required: false },
    back_default: { type: String, required: false },
    back_shiny: { type: String, required: false },
  },
  stats: {
    hp: { type: Number, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    special_attack: { type: Number, required: true },
    special_defense: { type: Number, required: true },
    speed: { type: Number, required: true },
  },
});

const PokemonData = mongoose.model("PokemonData", pokemonSchema);

module.exports = PokemonData;


// async function fetchPokemon (id){
//   const pokemonData = []; // Array to store all Pokémon data

//   for (let id = 1; id <= 151; id++) {
//     try {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//       const pokemon = await response.json();
//       pokemonData[id] = {
//         name: pokemon.name,
//         id: pokemon.id,
//         types: pokemon.types.map((type) => type.type.name),
//         sprites: pokemon.sprites.front_default, 
//       };
//     } catch (error) {
//       console.error(`Error fetching Pokémon with ID ${id}:`, error.message);
//     }
//   }

//   return pokemonData;
// };

// // Fetch and log the Pokémon data
// fetchPokemon()
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Error fetching Pokémon data:", err));


// module.exports = {
//   fetchPokemon, PokemonData
// }




