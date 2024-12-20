
const jwt = require("jsonwebtoken")
require("dotenv").config();
let jwtSecretKey = process.env.JWT_SECRET_KEY;

function generateJWT(userId, username){
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
    let providedToken = request.headers.jwt;
    console.log(providedToken);
    
    if (!providedToken){
        return response.status(403).json({
            message:"Sign in to view this content!"
        });
    }

    let decodedData = decodeJWT(providedToken);
    console.log(decodedData);
    

    if( decodedData.userId){
        // This can be used to allow other middleware to use the data for more queries
        request.authUserData = decodedData;
        console.log("Welcome user:" + decodedData.username);
        
        next()
    } else {
        return response.status(403).json({
            message:"Sign in to view this content!"
        });
    };
}

module.exports = {
    generateJWT, 
    decodeJWT,
    validateUserAuth
}