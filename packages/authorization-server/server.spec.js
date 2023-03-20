import request from "supertest";

import { buildApp } from "./server";

const distDir = `${__dirname}/dist`;

describe("app", () => {
  it("serves", async () => {
    await request(buildApp({}, distDir)).get("/").expect(200);
  });

  describe("GET /authorize", () => {
    it("returns 400 if client id is unknown", async () => {
      await request(buildApp({}, distDir))
        .get("/authorize?client_id=random")
        .expect(400);
    });

    it("returns 400 if redirect uri is unknown", async () => {
      const config = {
        app_client_id: "123",
        app_redirect_uri: "https://therealone.com",
      };
      await request(buildApp(config, distDir))
        .get("/authorize?client_id=123&redirect_uri=http://fake.com")
        .expect(400);
    });
  });

  describe("POST /approve", () => {
    it("returns 400 if response type is not code", async () => {
      await request(buildApp({}, distDir))
        .post("/approve")
        .send("respose_type=token")
        .expect(400);
    });

    it("returns 302 and authorization code", async () => {
      const tokenGenerator = () => "123";
      await request(buildApp({}, distDir, tokenGenerator))
        .post("/approve")
        .send("response_type=code&redirect_uri=https://therealone.com")
        .expect(302)
        .expect("Location", /code=123/);
    });
  });
});
