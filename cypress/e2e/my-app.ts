// To get rid of the syntax error
export {};

describe('events app', () => {
  it('should navigate to the third event page', () => {
    cy.visit('/');
    cy.findByText(/browse all events/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}/events`);
    cy.findByLabelText(/year/i).select('2022').should('have.value', '2022');
    cy.findByLabelText(/month/i).select('4').should('have.value', '4');
    cy.findByText(/find events/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}/events/2022/4`);
  });

  it('should show an error message for the date that does not exist', () => {
    cy.visit('/');
    cy.findByText(/browse all events/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}/events`);
    cy.findByLabelText(/year/i).select('2022').should('have.value', '2022');
    cy.findByLabelText(/month/i).select('12').should('have.value', '12');
    cy.findByText(/find events/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}/events/2022/12`);
    cy.findByText(/no events found/i);
  });
});
