/// <reference types="Cypress" />

import HomePage from '../pageObject/homePage';
import LoginPage from '../pageObject/loginPage';
import profilePage from '../pageObject/profilePage';
const loginName = 'li>a[title="Manage"]';
let homepage;
let loginpage;
let profile;
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

    it('Login User',function() {
        homepage = new HomePage();
        homepage.clickOnLoginLink();

        // Login User
        loginpage = new LoginPage();
        loginpage.enterUserEmal(data.email);
        loginpage.enterUserPassword(data.password);
        loginpage.clickOnRememberMeCheckBox();
        loginpage.clickOnLoginButton();
    })

    it('Verify User Logged In',function() {
        cy.get(loginName).contains('Hello snscareers@yahoo.com!');
        profile = new profilePage();
        profile.clickOnLogoutButton();
    })
})