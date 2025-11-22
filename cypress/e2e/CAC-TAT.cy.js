
//describe define a suite de testes
describe('Central de Atendimento ao Cliente TAT', () => {
  //it define o caso de teste.
  it('verifica o título da aplicação', () => {
    cy.visit('./src/index.html')

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})

