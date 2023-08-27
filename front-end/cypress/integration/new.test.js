const URL = Cypress.env("URL");

describe("feature two", () => {
  before(() => {
    cy.visit(`${URL}/bookmarks/new`);
  });

  it("shows the header text", () => {
    cy.contains("Bookmarks");
    cy.contains("New");
  });

  describe("the form", () => {
    // pay attention the capitalization!
    // cypress needs accuracy to find elements on the DOM\

    it("has a form with correct labels and fields", () => {
      // for this label/input use htmlFor/id: 'name'
      cy.get("label").contains("Name");
      cy.get("#name").should("have.attr", "type", "text");

      // for this label/input use htmlFor/id: 'title'
      cy.get("label").contains("URL");
      cy.get("#url").should("have.attr", "type", "text");

      // for this label/input use htmlFor/id: 'favorite'
      cy.get("label").contains("Category");
      cy.get("#category").should("have.attr", "type", "text");

      // for this label/input use htmlFor/id: 'mistakesWereMadeToday'
      cy.get("label").contains("Favorite");
      cy.get("#is_favorite").should("have.attr", "type", "checkbox");
    });
  });
});
