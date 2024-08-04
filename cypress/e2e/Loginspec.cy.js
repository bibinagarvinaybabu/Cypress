import LoginPage from "../Pages/LoginPage";

describe('template spec', () => {
  it('passes', () => {
    // cy.visit('https://howdenasia--asiadryrun.sandbox.my.salesforce.com');
    // cy.get('#username').type("provar.admin@howdengrp.com.nova.asiadryrun1", { delay: 0 });
    // cy.get('#password').type("Howden24!");
    // cy.get('#Login').click();
    cy.login("xxxxxx", "xxxxx");
    //cy.visit("/");
    cy.get("span[title='Howden Group']", { timeout: 20000 }).contains('Howden Group');  
    cy.get("a[title='Policies']", { timeout: 20000 }).contains("Policies").click();
     })
})