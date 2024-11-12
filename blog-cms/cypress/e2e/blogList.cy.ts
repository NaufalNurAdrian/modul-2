describe("Blog list page e2e test", () => {
    it("display a list blog post", () => {
        cy.visit("/");
        cy.get('[data-cy="blog-item"]').should('have.length.greaterThan',0)
    });

    it(`navigate to detail blog`, () => {
        cy.visit("/")
        cy.get('[data-cy="blog-item"]').first().click()
        cy.url().should('include', '/')
    })
})