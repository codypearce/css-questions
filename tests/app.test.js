const app = require("../app");
const questions = require("../data/questions");
const getRandomInt = require("../src/utils/getRandomInt");
const request = require("supertest");

describe("App Tests", () => {
  test("GET /api/v1/all", async () => {
    const response = await request(app).get("/api/v1/all");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(questions);
  });
  test("GET /api/v1/random", async () => {
    const response = await request(app).get("/api/v1/random");
    expect(response.statusCode).toBe(200);
  });
  test("GET /api/v1/:questionId", async () => {
    const response = await request(app).get("/api/v1/1");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(questions[1]);
  });
});
