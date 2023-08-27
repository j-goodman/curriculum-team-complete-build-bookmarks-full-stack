const URL = Cypress.env("URL");
describe("Show Page", () => {
  // the bookmark these tests are based on
  //   {
  //   captainName: "Picard",
  //   title: "Courage",
  //   post: "Courage can be an emotion too.",
  //   mistakesWereMadeToday: true,
  //   daysSinceLastCrisis: 100,
  // }
  before(() => {
    cy.visit(`${URL}/bookmarks/0`);
  });

  it("shows the header text", () => {
    cy.contains("Bookmarks");
    cy.contains("Show");
  });

  it("can navigate to New page", () => {
    cy.get("a").contains("New Bookmark").click();
    cy.url().should("eq", "http://localhost:3000/bookmarks/new");
  });
});
