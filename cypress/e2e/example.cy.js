<reference types="cypress" />;

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("p", "Find any quote");
  });
});
