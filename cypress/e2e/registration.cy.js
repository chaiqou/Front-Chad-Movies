/// <reference types="cypress" />

// eslint-disable-next-line no-undef
describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/register");
  });
  // eslint-disable-next-line no-undef
  it("user can not register if info is invalid", () => {
    // eslint-disable-next-line no-undef
    cy.visit("/register");
    // eslint-disable-next-line no-undef
    cy.contains("h1", "Create an Account");
    // eslint-disable-next-line no-undef
    cy.get("#registration-button").click();
    // eslint-disable-next-line no-undef
    cy.contains("Name cannot be empty").should("be.visible");
    // eslint-disable-next-line no-undef
    cy.contains("Email cannot be empty").should("be.visible");
    // eslint-disable-next-line no-undef
    cy.contains("Password cannot be empty").should("be.visible");
    // eslint-disable-next-line no-undef
    cy.contains("Confirm password cannot be empty").should("be.visible");
    // eslint-disable-next-line no-undef
    cy.url().should("include", "/register");
  }).timeout(10000);
  // eslint-disable-next-line no-undef
  it("user can register if info is valid", () => {
    // eslint-disable-next-line no-undef
    cy.visit("/register");
    // eslint-disable-next-line no-undef
    cy.get("#name").type("nikoloz");
    // eslint-disable-next-line no-undef
    cy.get("#email").type("adminnikswa@gmail.com");
    // eslint-disable-next-line no-undef
    cy.get("#password").type("sasasasa");
    // eslint-disable-next-line no-undef
    cy.get("#confirm-password").type("sasasasa");
    // eslint-disable-next-line no-undef
    cy.get("#registration-button").click();
    // eslint-disable-next-line no-undef
    cy.url().should("not.include", "/register");
  }).timeout(10000);
});
