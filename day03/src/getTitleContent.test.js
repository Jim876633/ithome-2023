import getTitleContent from "./getTitleContent";

describe("testing getTitleContent function", () => {
  it("getTitleContent with 'Hello World' ", () => {
    const title = "Hello World";
    const content = getTitleContent(title);
    expect(content).toMatchSnapshot();
  });
});