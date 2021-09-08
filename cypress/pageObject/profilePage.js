
const logoutButton = "li>form>button";
const loginName = 'li>a[title="Manage"]';

class profilePage {
    constructor(){
        // Give this element 10 seconds to appear
        cy.get(loginName,{ timeout: 10000 }).should('be.visible');
    }
    
    clickOnLogoutButton()
    {
        cy.get(logoutButton).click();
    }

    clickOnProfileNamen()
    {
        cy.get(loginName).click();
    }
}

export default  profilePage;