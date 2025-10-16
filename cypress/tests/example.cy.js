context('Example Acceptance Tests', () => {
  describe('Visit a page', () => {
    beforeEach(() => {
      // Given a logged in editor
      cy.viewport('macbook-16');
    });

    it('As editor I can add view Volto if I add the noRedirect query parameter', function () {
      cy.visit('/?noRedirect=true');
    });
  });
});
