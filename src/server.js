const express = require("express");
const { generateJWT } = require("./functions/jwtFunctions");
const { User } = require("./models/UserModel");

const app = express();

// Allows the server to 
app.use(express.json());


app.get("/", (request, response) => {
    response.json({
        message:"Hello, world"
    });
});

// Takes the username and password from a front end form
app.post("/signup", async (request, response) => {
    // check that a username and password are provided in request.body
    let username = request.body.username;
    let password = request.body.password;

    // If no username or password is provided throws an error 400
    if(!username || !password){
        response.status(400).json({
            message:"Incorrect or missing sign-up credentials provided."
        });
    }
    // make a user in the DB using the username and password
    let newUser = await User.create({username: username, password: password});
    // make a JWT based on the username and userID
    let newJwt = generateJWT(newUser.id, newUser.username);
    // return the JWT
    response.json({
        jwt:newJwt,
        user: {
            id: newUser.id,
            username: newUser.username
        };
    });
});





module.exports = {
    app
}