const mongoose = require("mongoose");
const fetch = require("node-fetch");
require("dotenv").config();

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
  likeCount: { type:Number },
});

const PokemonData = mongoose.model("PokemonData", pokemonSchema);




// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }
// Connect to MongoDB



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

const seedDatabase = async () => {
    const pokemonArray = await fetchFirst151Pokemon();

    console.log("Fetched Pokémon data, inserting into database...");
    
    mongoose.connect(process.env.DATABASE_URL);
    // Insert Pokémon data into the collection
    await PokemonData.insertMany(pokemonArray);

    console.log("Database seeded with Pokémon data!");
    mongoose.connection.close();

};

// Run the seeding function
seedDatabase();

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




