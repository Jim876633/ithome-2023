describe("ItemListPage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/home/itemList");
  });

  it("should add an item to the list", () => {
    const itemTitle = "New Item";
    cy.get("input[type='text']").type(itemTitle);
    cy.contains("ADD").click();
    cy.contains(itemTitle);
  });

  it("should remove an item from the list", () => {
    cy.get("li").first().as("firstItem");
    cy.get("@firstItem").contains("Delete").click();
    cy.contains("@firstItem").should("not.exist");
  });
});