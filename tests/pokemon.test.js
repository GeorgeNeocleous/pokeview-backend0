
const mongoose = require("mongoose");
const supertest = require("supertest");
const { app } = require("../src/server");
const { dbConnect, dbDisconnect } = require("../src/functions/dbFunctions");

beforeAll(async () => {
    dbConnect();
});

afterAll(async () => {
    dbDisconnect();
});

describe("Pokemon fetch from db", () => {
  test("Server returns JSON containing name 'pikachu'", async () => {
    const response = await supertest(app).get("/pokemon/search/pikachu");

    // Check if the response JSON contains the name 'pikachu'
    expect(response.status).toBe(200); // Check for success status
    expect(response.body).toHaveProperty("name", "pikachu"); // Check the name is 'pikachu'
  });
  
  
  test("Server returns JSON containing name 'pikachu'", async () => {
    const response = await supertest(app).get("/pokemon/search/pikachu");

    expect(response.body["charmander"]).toBeFalsy(); // Check the name is 'pikachu'
  });
});
