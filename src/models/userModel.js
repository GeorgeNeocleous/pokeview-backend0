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

// static signup method
// UserSchema.statics.signup = async (username, password) => {
//     const exists = await this.findOne({username});

//     if (exists){
//         throw Error('Username is already in use')
//     };

//     // Generates a string
//     const salt = await bcrypt.genSalt(10);
//     // Hashes the password, takes the password and salt as arguments
//     const hash = await bcrypt.hash(password, salt);

//     const user = await this.create({username, password: hash})

//     return user
// }
