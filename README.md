# pokeview-backend0

## Backend
Github: https://github.com/GeorgeNeocleous/pokeview-backend0
Render: https://pokeview-backend0.onrender.com/
## 


- User model
    - username
    - password


## Routes:

- "/signup"
    - POST
        - username
        - password
        - creates new user document in user collection
        - returns jwt


- "/login"
    - POST
        - username
        - password
        - checks username and password in user collection
        - returns jwt

- "users/:usersID"
    - GET
        - requires JWT header
        - gets one user and returns it

- "users/:usersID"
    - DELETE
        - gets one user and deletes it
        - returns deleted user information

- "/"
    - returns pokemon data for all 151 for the front-end to work with
        - GET
            - Name
            - Image
                - sprites.official-artwork.front_default
            - Pokedex number
            - Total like number
            - Stats

## Packages:

### "bcrypt": "^5.1.1" (Not in use - TODO)
- bcrypt is a package that was installed with the intention of using the hashing and salting functionality for additional user data security.
- Useful functionality would've been with their bcrypt.genSalt, bcrypt.hash and then bcrypt.compare.


### "cors": "^2.8.5"
- Is used to restrict what ports can request data from the server.


### "dotenv": "^16.4.7"
- Allows the app to use a dotenv file to store, abstract and use sensitive data from the .env file.


### "express": "^4.21.2"
- Manages the routes for the app.


### "helmet": "^8.0.0" (Not in use - TODO)
- A middeleware package that allows the addition of security-related HTTP headers. 


### "jsonwebtoken": "^9.0.2"
- Used to manage user authentication. Allows restriction of access to certain data based on a valid jwt.


### "mongoose": "^8.9.1
- Defines schemas and interacts with MongoDB.



