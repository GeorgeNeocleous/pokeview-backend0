const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true, 
        minLength:3,
        maxLength:20,
        trim: true
    },
    password: {
        type: String,
        required: true, 
        minLength:8,
        trim: true
    },
    likedPokemon: String,
});

// Belongs in user collection and is based on the UserSchema
const User = mongoose.model("User", UserSchema);

module.exports = {
    User
}
