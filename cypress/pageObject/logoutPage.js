
const logout = 'main>header>h1';
const message = 'main>header>p';
const home = 'ul>li>a[href='/']';

class logoutPage {
    constructor(){
        // Give this element 10 seconds to appear
        cy.get(logout,{ timeout: 10000 }).should('be.visible');
    }

    clickOnHomeButton()
    {
        cy.get(home).click();
    }
    
    VerifyLogoutMessage()
    {
        cy.get(message).contains('You have successfully logged out.');
    }
}
export default logoutPage;