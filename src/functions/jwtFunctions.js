const { request } = require("express");
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

function decodeJWT(tokenToDecode){

    return jwt.verify(tokenToDecode, jwtSecretKey);
}

async function validateUserAuth(request, response, next){
    // Looks at the request and verifies the 
    let providedToken = request.headers.jwt;
    console.log(providedToken);

    let decodedData = decodeJWT(providedToken);

    if (decodedData.userId){
        next();
    } else {
        return response.status(403).json({
            message: "Sign in to view this content"
        })
    }
}

module.exports = {
    generateJWT, 
    decodeJWT,
    validateUserAuth
}