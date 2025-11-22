
//describe define a suite de testes
describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {   
     cy.visit('./src/index.html')

  })
  //it define o caso de teste.
  it('verifica o título da aplicação', () => {
    cy.visit('./src/index.html')

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    //preecher nome 

  cy.get('#firstName').type('João')

  //preencher sobrenome
  cy.get('#lastName').type('Contreras')

  //preencher email
  cy.get('#email').type('jandrecontreras@gmail.com')

  //preencher campo de texto
  cy.get('#open-text-area').type('Teste de preenchimento de campo de texto' )

  //clicar no botão enviar
  cy.get('button[type="submit"]').click()

  //verificar se a mensagem de sucesso está visível
  cy.get('.success').should('be.visible')
  })

})

