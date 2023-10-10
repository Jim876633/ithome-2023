describe("FormPage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/home/form");
  });

  it("should display validation errors when form is submitted with invalid inputs", () => {
    cy.get("form").submit();
    cy.get("[data-testid=firstName-error]").should("be.visible");
    cy.get("[data-testid=lastName-error]").should("be.visible");
    cy.get("[data-testid=twId-error]").should("be.visible");
  });

  it("should submit the form when all inputs are valid", () => {
    cy.get("[name=firstName]").type("John");
    cy.get("[name=lastName]").type("Doe");
    cy.get("[name=twId]").type("A123456789");
    cy.get("form").submit();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        '{"firstName":"John","lastName":"Doe","twId":"A123456789"}'
      );
    });
  });
});