describe('CT004.001-Acesso a página do Chatbot', () => {
    it('não deve exibir resposta válida', () => {
        cy.visit('http://44.200.191.121/')
        cy.get('h2').should('contain', 'Responde AI')
        cy.get('.inputSearch').type('Quais sintomas da Tuberculose?{enter}')
        cy.get('.enter').click()
        cy.get('.error-msg').should('contain', 'Eu não sei responder isso')
        
              
    });
  });

  describe('CT004.002-Acesso a página do Chatbot', () => {
    it('deve exibir resposta válida', () => {
        cy.visit('http://44.200.191.121/')
        cy.get('h2').should('contain', 'Responde AI')
        cy.get('.inputSearch').type('Quais sintomas da Mpox?{enter}')
        cy.get('.msg').should('contain', 'Sintomas da Mpox')
        
              
    });
  });