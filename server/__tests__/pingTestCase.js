const request = require("supertest");
const app = require("../index");

describe("Test /api/ping", () => {
  it("should return a message of Pong", async () => {
    const response = await request(app).get("/api/ping");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Pong!");
  });
});
