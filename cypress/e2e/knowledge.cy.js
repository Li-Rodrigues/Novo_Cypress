describe('CT002.001-Ter botão de acesso à tela de cadastro de conhecimento', () => {
    it('deve ter um botão com o texto Adicionar novo Conhecimentos', () => {
        cy.visit("http://3.208.22.230/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('h3').should('contain', 'Listagem de Conhecimentos cadastrados')
        cy.get('button').should('contain', 'Adicionar novo Conhecimento')
    });
  });

    describe('CT002.002- Assunto cadastrado sem Conteúdo', () => {
    it('deve ter um botão com o texto Adicionar novo Conhecimentos', () => {
        cy.visit("http://3.208.22.230/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('button').should('contain', 'Adicionar novo Conhecimento')
        cy.get('button').click()
        cy.get('#assunto').type('Teste')
        cy.get('#conteúdo').type('0')
        cy.get('.button').click()
        cy.get('.error-msg').should('contain', 'Os campos são de preenchimento obrigatório')
    });
  });

  describe('CT002.003- Conteúdo cadastrado sem Assunto', () => {
    it('deve ter um botão com o texto Adicionar novo Conhecimentos', () => {
        cy.visit("http://3.208.22.230/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('button').should('contain', 'Adicionar novo Conhecimento')
        cy.get('button').click()
        cy.get('#assunto').type('0')
        cy.get('#conteúdo').type('Teste')
        cy.get('.button').click()
        cy.get('.error-msg').should('contain', 'Os campos são de preenchimento obrigatório')
    });
  });

  describe('CT002.004- Conhecimento cadastrado corretamente', () => {
    it('deve exibir a mensagem Salvo com sucesso!', () => {
        cy.visit("http://3.208.22.230/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('button').should('contain', 'Adicionar novo Conhecimento')
        cy.get('button').click()
        cy.get('#assunto').type('Teste')
        cy.get('#conteúdo').type('Teste')
        cy.get('.button').click()
        cy.get('.msg').should('contain', 'Salvo com Sucesso!')
    });
  });

  describe('CT003.00-Teste de exclusão de Conhecimento', () => {
    it('deve  Excluir permanentemente o Conhecimento', () => {
        cy.visit("http://3.208.22.230/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get(':nth-child(1) > a').should('contain', 'Conhecimentos')
        cy.get('.button').click()
        cy.get(':nth-child(1) > a').should('contain', 'Excluir permanentemente')
        cy.get('#btnDelete').click
        cy.get('.msg').should('contain', 'Salvo com sucesso!')
        
    });
  });
