const strIntParser = require("./index.js");

describe("strIntParser", () => {
  it("should return '123' when int 123 is given as input", () => {
    const input = 123;
    const result = strIntParser(input);
    expect(result).toBe("123");
    expect(typeof result).toBe("string");
  });

  it("should return error when string is empty", () => {
    const input = "";
    expect(() => strIntParser(input)).toThrowError(
      new Error("Unable to parse empty string.")
    );
  });

  it("should return error when non-numerical characters in string", () => {
    const input = "abc";
    expect(() => strIntParser(input)).toThrowError(
      new Error("String contains non-numerical characters.")
    );
  });

  it("should return number 00123 when '123' is given as input", () => {
    const input = "00123";
    result = strIntParser(input);
    expect(result).toBe(123);
    expect(typeof result).toBe("number");
  });

  it("should return number -123 when '-123' is given as input", () => {
    const input = "-123";
    result = strIntParser(input);
    expect(result).toBe(-123);
    expect(typeof result).toBe("number");
  });
});
