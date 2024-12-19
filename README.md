# pokeview-backend0

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

## db schemas: 

