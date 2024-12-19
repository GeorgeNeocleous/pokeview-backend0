const { request } = require("express");

let jwtSecretKey = process.env.JWT_SECRET_KEY;

async function generateJWT(userId, username){
    result = request.username;
    jwt
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