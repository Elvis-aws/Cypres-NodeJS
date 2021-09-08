/// <reference types="Cypress" />

import HomePage from '../pageObject/homePage';
import LoginPage from '../pageObject/loginPage';
import profilePage from '../pageObject/profilePage';
import logoutPage from '../pageObject/logoutPage';
const loginName = 'li>a[title="Manage"]';
let homepage;
let loginpage;
let profile;
let logout;
let data;

describe('Login test for NSNCareers', function(){
    
    before(async function(){
        data = await cy.fixture('appData');
        cy.visit(Cypress.env('url'));
        cy.clearCookies();
    })

    after(function(){
        cy.end();
    })

    it('Log User in',function() {
        homepage = new HomePage();
        homepage.clickOnLoginLink();

        loginpage = new LoginPage();
        loginpage.enterUserEmal(data.email);
        loginpage.enterUserPassword(data.password);
        loginpage.clickOnRememberMeCheckBox();
        loginpage.clickOnLoginButton();
    })

    it('Verify user logged in',function() {

        cy.get(loginName).contains('Hello snscareers@yahoo.com!');
        profile = new profilePage();
        profile.clickOnLogoutButton();
    })

    it('Logout User',function() {
        
        logout = new logoutPage();
        logout.VerifyLogoutMessage();
        logout.clickOnHomeButton();
    })
})