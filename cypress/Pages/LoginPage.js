class LoginPage{
    element = {

        username : () => cy.get('#username'),
        password: () => cy.get('#password'),
        login: () => cy.get('#Login')

    }

    login(username, password){
        this.element.username().type(username, { delay: 0 });
        this.element.password().type(password, { delay: 0 });
        this.element.login().click();

        
    }
}

module.exports = new LoginPage();
