




describe('Testes Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')
       
    });
});


describe('Validando Login Incorreto', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user1")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
        

    });
});

    
describe.only('Validar Senha Incorreta', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
        

    });
});

