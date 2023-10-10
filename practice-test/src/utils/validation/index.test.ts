import requiredSchema from "./requiredSchema";
import strAcctSchema from "./strAcctSchema";

describe("requiredSchema function testing", () => {
  it("輸入為「」，結果為 false", async () => {
    const schema = requiredSchema();
    const result = await schema.isValid("");
    expect(result).toBe(false);
  });
  it("輸入為「123」，結果為 true", async () => {
    const schema = requiredSchema();
    const result = await schema.isValid("123");
    expect(result).toBe(true);
  });
});

describe("strAcctSchema function testing", () => {
  it("輸入為「A123」，結果為 false", async () => {
    const schema = strAcctSchema();
    const result = await schema.isValid("A123");
    expect(result).toBe(false);
  });
  it("輸入為「A123456789」，結果為 true", async () => {
    const schema = strAcctSchema();
    const result = await schema.isValid("A123456789");
    expect(result).toBe(true);
  });
});
