// eslint-disable-next-line no-undef
describe("Registration", () => {
  it("visitd registration page", () => {
    // eslint-disable-next-line no-undef
    cy.visit("/register");
    // eslint-disable-next-line no-undef
    cy.contains("p", "Create an Account");
  }).timeout(10000);
});
