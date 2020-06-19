context('AlbumSearch', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  });

  it('should display data', () => {
    cy.get('#albumInput').type('3');
    cy.get('#searchButton').click({force: true});

    cy.get('#id').should('have.text', 'Album #101');
  });
});
