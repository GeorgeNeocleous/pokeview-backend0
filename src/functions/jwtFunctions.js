const jwt = require("jsonwebtoken")
require("dotenv").config();
let jwtSecretKey = process.env.JWT_SECRET_KEY;

async function generateJWT(userId, username){
    // format is jwt.sign(user, JWT_SECRET)
    return jwt.sign(
        {
            userId: userId,
            username: username
        },
            jwtSecretKey,
        {
            expiresIn: "10h"
        }
    );
}

async function decodeJWT(tokenToDecode){

}

async function validateUserAuth(request, response, next){
    // Looks at the request and verifies the 
}

module.exports = {
    generateJWT, 
    decodeJWT,
    validateUserAuth
}