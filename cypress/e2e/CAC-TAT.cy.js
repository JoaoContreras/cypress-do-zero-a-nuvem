
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
    cy.get('#open-text-area').type(longText, { delay: 0 })
    //clicar no botão enviar
    cy.contains('button', 'Enviar').click()

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
    cy.contains('button', 'Enviar').click()

    //verificar se a mensagem de erro está visível
    cy.get('.error').should('be.visible')

  })
  //exercicio extra 3

  it('campo telefone continua vazio quando preenchido com valor não numérico', () => {
    cy.get('#phone').type('teste')
      .should('have.value', '')

  })
  //exercicio extra 4

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
    cy.contains('button', 'Enviar').click()

    //verificar se a mensagem de erro está visível
    cy.get('.error').should('be.visible')


  })
  //exercicio extra 5
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').type('João').should('have.value', 'João').clear().should('have.value', '')
    cy.get('#lastName').type('Contreras').should('have.value', 'Contreras').clear().should('have.value', '')
    cy.get('#email').type('jandrecontreras@gmail.com').should('have.value', 'jandrecontreras@gmail.com').clear().should('have.value', '')
    cy.get('#phone').type('1234567890').should('have.value', '1234567890').clear().should('have.value', '')

  })
  //exercicio extra 6

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click()

    //verificar se a mensagem de erro está visível
    cy.get('.error').should('be.visible')
  })

  it('envia o formulário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')


  })

  it('envia o formulário com sucesso usando um comando customizado com dados costumizaveis', () => {

    const data = {
      firstName: 'Ivete',
      lastName: 'Maia',
      email: 'Ivetemaia@example.com',
      text: 'Teste de preenchimento de campo personalizado'
    }
    cy.fillMandatoryFieldsAndSubmit(data)

    cy.get('.success').should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', () => {


    cy.get('#product').select('youtube').should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {

    cy.get('#product').select('mentoria').should('have.value', 'mentoria')

  })


  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product').select(1).should('have.value', 'blog')



  })

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]').check()

      .should('be.checked')
  })

  it('marca cada tipo de atendimento', () => {

    cy.get('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
          .check()
          .should('be.checked')
      })



  })
  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  })
  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('input[type="file"]#file-upload')
      .should('not.have.value')
      .selectFile('cypress/fixtures/example.json')
      .should($input => {
        expect($input[0].files[0].name).to.equal('example.json')
      })


  })




  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should($input => {
        expect($input[0].files[0].name).to.equal('example.json')
      })

  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
      .selectFile('@sampleFile')
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should($input => {
        expect($input[0].files[0].name).to.equal('example.json')

      })
  })
it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',()=>{
cy.contains('a','Política de Privacidade')
.should('have.attr','href','privacy.html',)
.and('have.attr','target','_blank')

})
it('acessa a pagina da politica de privacidade removendo o target e entao clicando',()=>{
cy.contains('a','Política de Privacidade')
.invoke('removeAttr','target')
.click()

cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')

})

it('Testa a página da política de pricacidade de forma independente',()=>{
cy.contains('a','Política de Privacidade')




})





})
















