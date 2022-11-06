describe("SauceLab Web login 4 account", () => {
    it("Login", () => {
        cy.visit('https://www.saucedemo.com')
        cy.title().should("Swag Labs")
      })
    
    it("standard_user", () => {
        cy.get('#user-name').type('standard_user')//Username
        cy.get('#password').type('secret_sauce')//Password
        cy.get('#login-button').click()//click button
    })

    it("locked_out_user", () => {
        cy.get('#user-name').type('locked_out_user')//Username
        cy.get('#password').type('secret_sauce')//Password
        cy.get('#login-button').click()//click button
    })

    it("problem_user", () => {
        cy.get('#user-name').type('problem_userr')//Username
        cy.get('#password').type('secret_sauce')//Password
        cy.get('#login-button').click()//click button
    })

    it("performance_glitch_user", () => {
        cy.get('#user-name').type('performance_glitch_user')//Username
        cy.get('#password').type('secret_sauce')//Password
        cy.get('#login-button').click()//click button
    })
})