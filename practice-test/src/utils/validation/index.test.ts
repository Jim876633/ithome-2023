import requiredSchema from "./requiredSchema";

describe("requiredSchema", () => {
  it("should return true when value is not empty or undefined", () => {
    const schema = requiredSchema();
    expect(schema.isValidSync("hello")).toBe(true);
  });

  it("should return false when value is empty string", () => {
    const schema = requiredSchema();
    expect(schema.isValidSync("")).toBe(false);
  });

  it("should return false when value is undefined", () => {
    const schema = requiredSchema();
    expect(schema.isValidSync(undefined)).toBe(false);
  });
});
import twIdSchema from "./strAcctSchema";

describe("twIdSchema", () => {
  it("should return true when value is a valid Taiwan ID", () => {
    const validTaiwanId = "A123456789";
    expect(twIdSchema().isValidSync(validTaiwanId)).toBe(true);
  });

  it("should return false when value is an invalid Taiwan ID", () => {
    const invalidTaiwanId = "A12345678";
    expect(twIdSchema().isValidSync(invalidTaiwanId)).toBe(false);
  });

  it("should return false when value is undefined", () => {
    expect(twIdSchema().isValidSync(undefined)).toBe(false);
  });

  it("should return false when value is not a string", () => {
    expect(twIdSchema().isValidSync(123)).toBe(false);
  });

  it("should return false when value is an empty string", () => {
    expect(twIdSchema().isValidSync("")).toBe(false);
  });
});
