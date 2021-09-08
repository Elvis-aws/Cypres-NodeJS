/// <reference types="Cypress" />
const emailField = '#Input_Email';
const passwordField = '#Input_Password';
const loginButton = 'div>button[type="submit"]';
const confirmPasswordField = '#Input_ConfirmPassword';

class registerPage
{
    constructor(){
    // Give this element 10 seconds to appear
    cy.get(loginButton,{ timeout: 10000 }).should('be.visible');
    }

    getCreateAccountElement()
    {
        var element = cy.get('div>form>h4');
        return element;
    }

    enterUserEmal(email)
    {
        cy.get(emailField).type(email);
    }

    enterUserPassword(password)
    {
        cy.get(passwordField).type(password);
    }

    enterUserConfirmPassword(cornPassword)
    {
        cy.get(confirmPasswordField).type(cornPassword);
    }
}

export default registerPage;