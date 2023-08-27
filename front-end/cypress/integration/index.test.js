const URL = Cypress.env("URL");

describe("Index page", () => {
  before(() => {
    cy.visit(`${URL}/bookmarks`);
  });

  it("Has a link to each bookmarks's show page", () => {
    const regex = /bookmarks\/(\d+)/;
    const test = cy.get(".Bookmark a");

    cy.get(".Bookmark a").each(($item) => {
      cy.log($item);
      cy.wrap($item).invoke("attr", "href").should("match", regex);
    });
  });

  it("Can load index page and has navigation to New page", () => {
    cy.get("a")
      .contains("New Bookmark")
      .should("have.attr", "href", `/bookmarks/new`);
  });

  it("Can navigate to New page", () => {
    cy.get("a").contains("New Bookmark").click();
    cy.url().should("eq", `${URL}/bookmarks/new`);
  });
});
