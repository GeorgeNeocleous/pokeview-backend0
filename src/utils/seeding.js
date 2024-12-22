

const seedDatabase = async () => {
    const pokemonArray = await fetchFirst151Pokemon();

    console.log("Fetched Pokémon data, inserting into database...");
    dbConnect();
    // mongoose.connect(process.env.DATABASE_URL) ||
    // Insert Pokémon data into the collection
    await PokemonData.insertMany(pokemonArray);

    console.log("Database seeded with Pokémon data!");
    dbDisconnect();
    // mongoose.connection.close();
};