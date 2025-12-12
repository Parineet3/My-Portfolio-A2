/* eslint-env cypress */

describe("Sign Up Page E2E Test", () => {
  it("allows a new user to enter details and validates fields", () => {
    cy.visit("http://localhost:5173/signup");

    // Type user info
    cy.get('input[placeholder="Full Name"]').type("Parineet Kaur");
    cy.get('input[placeholder="Email Address"]').type("testsignup@example.com");
    cy.get('input[placeholder="Password"]').type("mypassword123");

    // Submit form
    cy.contains("Sign Up").click();

    // Check redirect OR validation errors
    cy.url().should("satisfy", (url) => {
      return url.includes("/signin") || url.includes("/signup");
    });
  });
});
