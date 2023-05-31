describe("conformation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should click on navigation icon then click on confirmation to get confirmation page", () => {
    cy.get(".navigation__icon").click();
    cy.get(".navigation__link").should("be.visible");
    cy.get(".navigation__link").last().should("have.text", "Confirmation");
    cy.get(".navigation__link").last().click();
    cy.get(".top__title").should("contain", "See you soon");
  });

  it("should click on navigation icon then click on booking to get the home page ", () => {
    cy.get(".navigation__icon").click();
    cy.get(".navigation__link").first().should("have.text", "Booking");
    cy.get(".navigation__link").first().click();
    cy.get(".top__title").should("have.text", "Booking");
  });
});
