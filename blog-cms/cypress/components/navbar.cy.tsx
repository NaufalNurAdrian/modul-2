import Navbar from "@/components/navbar"

describe('Home Page Components',()=>{
    it('render component correctly',()=>{
        cy.mount(<Navbar />)
        cy.get('a[href="/"]').should("exist")
        cy.get("img").should("exist")
    })
})