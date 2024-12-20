const express = require("express");
const { generateJWT, validateUserAuth } = require("./functions/jwtFunctions");
const { User } = require("./models/UserModel");

const app = express();

// Allows the server to 
app.use(express.json());


app.get("/", (request, response) => {
    response.json({
        message:"Hello, world"
    });
});

app.post("/signup", async (request, response) => {
	// check that a username and password are provided in request.body 
	let username = request.body.username;
	let password = request.body.password;

	if (!username || !password) {
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
		jwt: newJwt,
		user: {
			id: newUser.id,
			username: newUser.username
		}
	});
});

app.get("/authenticationRoute", validateUserAuth, (request, response) => {
    response.json({
        message:"You can see protected content because you're signed in"
    });
});
 
 

module.exports = {
    app
}