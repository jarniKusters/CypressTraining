describe('my First Test', () => {
    it("should visit a webpage", () =>{
        cy.visit('https://www.cypress.io')
        cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(2) > .Link-sc-5cc5in-0').click()
    })
})