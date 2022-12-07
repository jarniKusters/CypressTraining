describe('my First Test', () => {
    it("Gets, types and asserts", () =>{
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        //should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
        //Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value','fake@email.com')
    })
})
describe('Assignment 1', () =>{
    it('Log in and check if link includes inventory', ()=>{
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]')
        .type('standard_user')
        .should('have.value', 'standard_user')
        cy.get('[data-test="password"]')
        .type('secret_sauce')
        .should('have.value', 'secret_sauce')
        cy.get('[data-test="login-button"]')
        .click()
        cy.url().should('includes','inventory')

    })
})
describe('Assignment 3', () =>{
    it('make assertions', ()=>{
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]')
        .type('standard_user')
        .should('have.value', 'standard_user')
        cy.get('[data-test="password"]')
        .type('secret_sauce')
        .should('have.value', 'secret_sauce')
        cy.contains('Login') //new
        .click()
        cy.contains('Sauce Labs') //new
        .click()
    })
})
describe('Assignment 4', () =>{
    it('Add timeout to assertion', ()=>{
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]')
        .type('standard_user')
        .should('have.value', 'standard_user')
        cy.get('[data-test="password"]')
        .type('secret_sauce')
        .should('have.value', 'secret_sauce')
        cy.contains('Login')
        .click()
        //cy.contains('Login' , {timeout: 10000}) //new
        //.click()
        cy.contains('Sauce Labs')
        .click()
    })
})
describe('Assignment 5', () =>{
    it('Check item description', ()=>{
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]')
        .type('standard_user')
        .should('have.value', 'standard_user')
        cy.get('[data-test="password"]')
        .type('secret_sauce')
        .should('have.value', 'secret_sauce')
        cy.contains('Login')
        .click()
        cy.get(':nth-child(4) > .inventory_item_description')
        .contains('Fleece Jacket')
        cy.get(':nth-child(4) > .inventory_item_description')
        .contains('49.99')
        .and('be.visible')
        cy.get(':nth-child(4) > .inventory_item_description')
        .should('have.class', 'inventory_item_description')
    })
})
describe('Assignment 6', () =>{
    it('assertion with expect', ()=>{
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]')
        .type('standard_user')
        .should('have.value', 'standard_user')
        cy.get('[data-test="password"]')
        //yielding the element into val
        .type('secret_sauce')
        .invoke('val')
        .then(val =>{
            expect(val).to.equal('secret_sauce')
        })
    })
})
describe('Assignment 7', () =>{
    it('logs in with command', ()=>{
        cy.login('standard_user', 'secret_sauce')
    })
})
describe('Assignment 8', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
    })
    afterEach(() => {
        cy.get('#react-burger-menu-btn')
        .click()
        cy.get('#logout_sidebar_link')
        .contains('Logout')
        .click()
    })
    it('Add to cart and check cart' , () => {
        cy.get('#item_0_title_link > .inventory_item_name')
        .click()
        cy.get('button')
        .contains('Add to cart')
        .click()
        cy.get('.shopping_cart_link')
        .click()
        cy.get('.cart_item')
        .contains('Sauce Labs Bike Light')
    })
    it('Filter and check if first item is different' , () => {
        cy.get(':nth-child(1) > .inventory_item_description')
        .contains('Sauce Labs Backpack')
        cy.get('.product_sort_container') 
        .select('Name (Z to A)') //use .select to select the option
        cy.get(':nth-child(1) > .inventory_item_description')
        .should('not.contain', 'Sauce Labs Backpack')
    })
    it('Assigment 9', () => {
        cy.log('Add it.only() and it.skip() to assigment 8')
        //it.only() -> only executes that specific test
        //it.skip() -> skips that specific test
    })

})
describe('Assignment 10', () =>{
    it.only('Add 2 retries to the test when run in openMode',
    {
        retries:{
            runMode: 0,
            openMode: 2,
        },
    }, 
    ()=>{
        cy.login('standard_user', 'secret_sauce')
        cy.contains('Sauce Labs')
        .click()
    })
})