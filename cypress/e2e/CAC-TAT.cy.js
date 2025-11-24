
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
    

  const longText = Cypress._.repeat('Texto longo', 20)
//preecher nome 
  cy.get('#firstName').type('João')
  //preencher sobrenome
  cy.get('#lastName').type('Contreras')
  //preencher email
  cy.get('#email').type('jandrecontreras@gmail.com')
  //preencher campo de texto
  cy.get('#open-text-area').type(longText, {delay: 0})
  //clicar no botão enviar
  cy.get('button[type="submit"]').click()
  //verificar se a mensagem de sucesso está visível
  cy.get('.success').should('be.visible')
  })

//exercicio extra 2
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
  cy.get('#firstName').type('João')
  //preencher sobrenome
  cy.get('#lastName').type('Contreras')
  //preencher email
  cy.get('#email').type('jandrecontrerascom')
  //preencher campo de texto
  cy.get('#open-text-area').type('Teste de preenchimento de campo ')
  //clicar no botão enviar
  cy.get('button[type="submit"]').click()
  //verificar se a mensagem de erro está visível
  cy.get('.error').should('be.visible')

  })

  it('campo telefone continua vazio quando preenchido com valor não numérico', () => {
   cy.get('#phone').type('teste')
   .should('have.value','')

  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => { 
cy.get('#firstName').type('João')
  //preencher sobrenome
  cy.get('#lastName').type('Contreras')
  //preencher email
  cy.get('#email').type('jandrecontrerascom')
  //marcar checkbox telefone obrigatório
  cy.get('#phone-checkbox').check()


  //preencher campo de texto
  cy.get('#open-text-area').type('Teste de preenchimento de campo ')
  //clicar no botão enviar
  cy.get('button[type="submit"]').click()
  //verificar se a mensagem de erro está visível
  cy.get('.error').should('be.visible')


  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').type('João').should('have.value', 'João').clear().should('have.value', '')
    cy.get('#lastName').type('Contreras').should('have.value', 'Contreras').clear().should('have.value', '')
    cy.get('#email').type('jandrecontreras@gmail.com').should('have.value', 'jandrecontreras@gmail.com').clear().should('have.value', '')
    cy.get('#phone').type('1234567890').should('have.value', '1234567890').clear().should('have.value', '')

  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
cy.get('button[type="submit"]').click()
  //verificar se a mensagem de erro está visível
  cy.get('.error').should('be.visible')
})

})
