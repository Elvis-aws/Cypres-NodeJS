/// <reference types="Cypress" />

const registerButton = 'ul>li>a[href*="Register"]';
const loginButton = 'ul>li>a[href*="Login"]';
const pageTitle = 'main>div>h1';

class homePage {
    constructor(){
        // Give this element 10 seconds to appear
        cy.get(pageTitle,{ timeout: 10000 }).should('be.visible');
    }

    clickOnRegisterLink()
    {
        cy.get(registerButton).click();
    }

    clickOnLoginLink()
    {
        cy.get(loginButton).click();
    }

    getPageTitle()
    {
        var title = cy.title();
        return title;
    }
}

export default homePage;