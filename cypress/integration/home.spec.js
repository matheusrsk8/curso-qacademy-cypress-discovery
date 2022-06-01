describe('home page', ()=>{ 
    it('Aplicacao web deve estar ONLINE', ()=>{
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})