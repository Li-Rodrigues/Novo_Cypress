describe('CT003.001-Ter botão de acesso à tela de cadastro de Usuário', () => {
    it('deve ter um botão com o texto Adicionar novo Usuário', () => {
        cy.visit("http://44.200.191.121/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('h3').should('contain', 'Listagem de Usuários cadastrados')
        cy.get('button').should('contain', 'Adicionar novo Usuários')
        
    });
  });


describe('CT003.002-Preenchimento correto dos Campos obrigatórios', () => {
    it('deve aparecer a mensagem Salvo Com Sucesso!', () => {
        cy.visit("http://44.200.191.121/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('h3').should('contain', 'Listagem de Usuários cadastrados')
        cy.get('button').should('contain', 'Adicionar novo Usuários')
        cy.get('.button').click()
        cy.get('#username').type("Teste")
        cy.get('#email').type("Teste")
        cy.get('#password').type("Teste")
        cy.get('[type="submit"]').click()
        cy.get('.msg').should('contain', 'Salvo com Sucesso!')
    });
  });

  describe('CT003.002-Preenchimento com senha inválida', () => {
    it('deve aparecer a mensagem Senha inválida!', () => {
        cy.visit("http://44.200.191.121/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('h3').should('contain', 'Listagem de Usuários cadastrados')
        cy.get('button').should('contain', 'Adicionar novo Usuários')
        cy.get('.button').click()
        cy.get('#username').type("Teste")
        cy.get('#email').type("Teste")
        cy.get('#password').type("Casa")
        cy.get('.button').click()
        cy.get('.msg').should('contain', 'Senha inválida!')
    });
  });

  describe('CT003.003-Preenchimento do Username e não do email e senha', () => {
    it('deve aparecer a mensagem Campo obrigatório!', () => {
        cy.visit("http://44.200.191.121/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('h3').should('contain', 'Listagem de Usuários cadastrados')
        cy.get('button').should('contain', 'Adicionar novo Usuários')
        cy.get('.button').click()
        cy.get('#username').type("Teste")
        cy.get('#email').type("0")
        cy.get('#password').type("0")
        cy.get('.button').click()
        cy.get('.msg').should('contain', 'Campo obrigatório')
    });
  });

  describe('CT003.004-Preenchimento do Username e não do email e senha', () => {
    it('deve aparecer a mensagem Campo obrigatório!', () => {
        cy.visit("http://44.200.191.121/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('h3').should('contain', 'Listagem de Usuários cadastrados')
        cy.get('button').should('contain', 'Adicionar novo Usuários')
        cy.get('.button').click()
        cy.get('#username').type("0")
        cy.get('#email').type("Teste")
        cy.get('#password').type("0")
        cy.get('.button').click()
        cy.get('.msg').should('contain', 'Campo obrigatório')
    });
  });

  describe('CT003.005-Preenchimento da Senha e não do Username e email', () => {
    it('deve aparecer a mensagem Campo obrigatório!', () => {
        cy.visit("http://44.200.191.121/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('h3').should('contain', 'Listagem de Usuários cadastrados')
        cy.get('button').should('contain', 'Adicionar novo Usuários')
        cy.get('.button').click()
        cy.get('#username').type("0")
        cy.get('#email').type("0")
        cy.get('#password').type("Teste")
        cy.get('.button').click()
        cy.get('.msg').should('contain', 'Campo obrigatório')
    });
  });


  describe('CT003.006-Preenchimento correto dos Campos obrigatórios', () => {
    it('deve aparecer a mensagem Salvo Com Sucesso!', () => {
        cy.visit("http://44.200.191.121/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('h3').should('contain', 'Listagem de Usuários cadastrados')
        cy.get('button').should('contain', 'Adicionar novo Usuários')
        cy.get('.button').click()
        cy.get('#username').type("Teste")
        cy.get('#email').type("Teste")
        cy.get('#password').type("Teste")
        cy.get('[type="submit"]').click()
        cy.get('.msg').should('contain', 'Salvo com Sucesso!')
    });
  });

  describe('CT003.007-Teste de exclusão de Usuários', () => {
    it('deve  Excluir permanentemente o Usuário', () => {
        cy.visit("http://44.200.191.121/appuser/")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get(':nth-child(2) > a').should('contain', 'Usuários')
        cy.get('.button').click()
        cy.get('[href="/appuser/users/edit/1"] > li').click()
        cy.get('.form-entity > :nth-child(7)').click
        cy.get('.msg').should('contain', 'Salvo com sucesso!')
        
    });
  });

 