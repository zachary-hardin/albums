context('AlbumSearch', () => {
  it('should display data', () => {
    cy.visit('http://localhost:4200/');

    cy.get('#albumInput').type('3');
    cy.get('#searchButton').click({force: true});

    cy.get('#id').should('have.text', 'Album #101');
  });
});
