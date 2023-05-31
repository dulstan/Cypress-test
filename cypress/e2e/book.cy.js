describe("book", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should be able to type in input", () => {
    const inputs = [
      { selector: ".booking-info__date", value: "2023-06-01" },
      { selector: '[name="time"]', value: "16:00" },
      { selector: ".booking-info__who", value: 2 },
      { selector: ".booking-info__lanes", value: 1 },
    ];

    cy.wait(1000);

    inputs.forEach((input) => {
      cy.get(input.selector)
        .type(input.value)
        .should("have.value", String(input.value));
    });
  });

  it("should add shoes", () => {
    const sizes = [41, 35];

    cy.wait(1000);

    sizes.forEach((size, index) => {
      cy.get(".shoes__button").eq(index).click();
      cy.get(".shoes__input").eq(index).type(size);
      cy.get(".shoes__input").eq(index).should("have.value", size.toString());
    });
  });

  it("should remove shoes", () => {
    const sizes = [41, 35];

    cy.wait(1000);

    sizes.forEach((size, index) => {
      cy.get(".shoes__button").eq(index).click();
      cy.get(".shoes__input").eq(index).type(size);
      cy.get(".shoes__input").eq(index).should("have.value", size.toString());
    });

    cy.get(".shoes__button--small").last().click();
    cy.get(".shoes__input").should("have.length", sizes.length - 1);
  });
});
