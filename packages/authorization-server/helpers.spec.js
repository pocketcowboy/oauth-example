import { extractQueryParams } from "./helpers";

describe("extractQueryParams", () => {
  it("returns objects with params", () => {
    const params = extractQueryParams({
      search: "?code=123&state=abc",
    });
    expect(params).toEqual({ code: "123", state: "abc" });
  });
});
