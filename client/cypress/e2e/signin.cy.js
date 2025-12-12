/* eslint-env cypress */

describe("Sign In Page E2E Test", () => {
  it("allows a user to enter credentials and shows an error for invalid login", () => {
    cy.visit("http://localhost:5173/signin");

    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("wrongpassword");

    cy.contains("Sign In").click();

    cy.url().should("include", "/signin");
  });
});
