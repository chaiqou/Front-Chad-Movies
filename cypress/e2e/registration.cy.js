/* eslint-disable no-undef */

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("user can not register if info is invalid", () => {
    cy.contains("h1", "Create an Account");
    cy.get("#registration-button").click();
    cy.contains("Name cannot be empty").should("be.visible");
    cy.contains("Email cannot be empty").should("be.visible");
    cy.contains("Password cannot be empty").should("be.visible");
    cy.contains("Confirm password cannot be empty").should("be.visible");
    cy.url().should("include", "/register");
  }).timeout(10000);

  it("user can register if info is valid", () => {
    cy.get("#name").type("nikoloz");
    cy.get("#email").type("test@gmail.com");
    cy.get("#password").type("sasasasa");
    cy.get("#confirm-password").type("sasasasa");
    cy.intercept("POST", "http://localhost:8000/api/register", {
      statusCode: 200,
    });
    cy.get("#registration-button").click();
    cy.url().should("not.include", "/register");
  }).timeout(10000);
});
