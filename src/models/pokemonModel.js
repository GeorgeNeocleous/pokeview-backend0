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
  likeCount: { type:Number },
});

const PokemonData = mongoose.model("PokemonData", pokemonSchema);

module.exports = {PokemonData};





