/// <reference types="Cypress" />

import HomePage from '../pageObject/homePage';
const loginName = 'li>a[title="Manage"]';
let homepage;

describe('Login test for NSNCareers', function(){
    
    before(function(){
        cy.visit(Cypress.env('url'));
        cy.clearCookies();
    })

    after(function(){
        cy.end();
    })

    it('Click on login Link',function() {
        homepage = new HomePage();
        homepage.clickOnLoginLink();
    })
})