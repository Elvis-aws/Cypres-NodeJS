/// <reference types="Cypress" />

const emailField = '#Input_Email';
const passwordField = '#Input_Password';
const loginButton = 'div>button[type="submit"]';
const rememberMeBox = 'input[type="checkbox"]';
const forgotPasswordLink = 'a[id="forgot-password"]';
const newUserLink = 'a[href*="Register?"]';
const confirmEmailLink = 'p>button[type="submit"]';

class loginPage{
    constructor(){
    // Give this element 10 seconds to appear
    cy.get(loginButton,{ timeout: 10000 }).should('be.visible');
    }

    enterUserEmal(email)
    {
        cy.get(emailField).type(email);
    }

    enterUserPassword(password)
    {
        cy.get(passwordField).type(password);
    }

    clickOnLoginButton()
    {
        cy.get(loginButton).click();
    }

    clickOnRememberMeCheckBox()
    {
        cy.get(rememberMeBox).check();
    }

    clickOnForgotYourPasswordLink()
    {
        cy.get(forgotPasswordLink).click();
    }

    clickOnRegisterAsANewUserLink()
    {
        cy.get(newUserLink).click();
    }

    clickOnResendEmailConfirmationLink()
    {
        cy.get(confirmEmailLink).click();
    }
}

export default loginPage;