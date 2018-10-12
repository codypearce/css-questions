const app = require("../app");
const questions = require("../data/questions");
const getRandomInt = require("../src/utils/getRandomInt");
const request = require("supertest");

describe("GET /api/v1/all", () => {
  test("with valid data", async () => {
    const response = await request(app).get("/api/v1/all");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(questions);
  });
});
