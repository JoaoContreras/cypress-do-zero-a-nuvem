Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Wick',
    email: 'johnwick@example.com',
    text: 'mensagem de teste default'
} 


) => {
  cy.get('#firstName').type(data.firstName )
  cy.get('#lastName').type(data.lastName)
  cy.get('#email').type(data.email) 
  cy.get('#open-text-area').type(data.text)
   cy.contains('button', 'Enviar').click()
})