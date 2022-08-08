/* eslint-disable no-undef */

describe("lognin", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("user can not login if info is invalid", () => {
    cy.contains("h1", "Log in to your account");
    cy.get("#login-button").click();
    cy.contains("Email cannot be empty").should("be.visible");
    cy.contains("Password cannot be empty").should("be.visible");
    cy.url().should("include", "/login");
  });
  it("user can login if info is valid", () => {
    cy.get("#login-email").type("lomtadzenikusha@gmail.com");
    cy.get("#login-password").type("sasasasa");
    cy.get("#login-button").click();
    cy.url().should("include", "/dashboard");
  }).timeout(10000);
});
