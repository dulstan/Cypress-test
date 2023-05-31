describe("conformation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should add booking and get bookingnumber", () => {
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

    const sizes = [41, 35];

    cy.wait(1000);

    sizes.forEach((size, index) => {
      cy.get(".shoes__button").eq(index).click();
      cy.get(".shoes__input").eq(index).type(size);
      cy.get(".shoes__input").eq(index).should("have.value", size.toString());
    })

    cy.get(".booking__button").click();
    cy.get(".input__label").eq(3).should("have.text", "Booking number");
    cy.get(".confirmation__input").should(($input) => {
      expect($input.val()).to.not.be.empty;
    });
    cy.get(".confirmation__input").should(($input) => {
      const inputValue = $input.val();
      expect(inputValue.length).to.be.greaterThan(1);
    });
  });

  it('should add booking and show total price', ()=>{
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

    const sizes = [41, 35];

    cy.wait(1000);

    sizes.forEach((size, index) => {
      cy.get(".shoes__button").eq(index).click();
      cy.get(".shoes__input").eq(index).type(size);
      cy.get(".shoes__input").eq(index).should("have.value", size.toString());
    })
    cy.get('.booking__button').click()
        cy.wait(1000)
        cy.get('.confirmation__price > p').last().should('contain', '340')

   


  })
});
