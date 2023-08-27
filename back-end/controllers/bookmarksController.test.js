const request = require("supertest");

const bookmarks = require("../app.js");
const db = require("../db/dbConfig.js");

describe("Basic root route", () => {
  describe("/", () => {
    it("is able to make a successful get request to /, that returns a string", async () => {
      const response = await request(bookmarks).get("/");
      expect(response.text).toBe("Hello, world!");
    });
  });
});

afterAll(() => {
  db.$pool.end();
});
