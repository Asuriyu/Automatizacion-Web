describe('Ejemplo de prueba', () => {
  it('Debería hacer algo', () => {
        cy.visit('https://ejemplo.com');
        cy.contains('h1', 'Ejemplo').should('exist');
        cy.get('h1').then(($h1) => {
  })
})
