const express = require("express");
const { generateJWT, validateUserAuth } = require("./functions/jwtFunctions");
const { User } = require("./models/userModel");
const { PokemonData } = require("./models/pokemonModel");
const pokemonRouter = require("./controllers/pokemonController")
const userRouter = require("./controllers/userController")
// const cors = require("cors");


const app = express();

// Allows the server to 
app.use(express.json());

<<<<<<< development
// let corsOptions = {
//     //         local                                              vite                     deployed react app
//     origin: ["http://localhost:3000", "http://localhost:8080","http://localhost:5173", "https://deployedrectapp.com"],
//     optionsSuccessStatus: 200
// }
=======
// let corsOptions = {
//     //         local                     vite                     deployed react app
//     origin: ["http://localhost:3000", "http://localhost:5173", "https://deployedrectapp.com"],
//     optionsSuccessStatus: 200
// }
>>>>>>> main

// app.use(cors(corsOptions));

app.get("/", (request, response) => {
    response.json({
        message:"Hello world"
    });
});
 
app.use("/users", userRouter);

app.use("/pokemon", pokemonRouter);
// Tell the app to use that router

module.exports = {
    app
}