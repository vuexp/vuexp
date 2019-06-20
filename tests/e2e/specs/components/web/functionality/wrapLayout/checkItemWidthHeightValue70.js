module.exports = {
  tags: ['layout', 'wrap'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.wrapLayoutPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'layouts/wraplayout.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13842593 - Props /Name: itemWidth, itemHeight , Value: 70'() {
    this.currentPage
      .checkInitialElements()
      // Clear default children for empty rendered result so that test result can be more clear
      .clickRemoveChildButton()
      // Add first children
      .addChild('Orange', 210, 140, 'Vertical', 70, 70, 'firstChild', 70, 70)
      .clickAddNewChildButton()
      // Add second children
      .addChild('Orange', 210, 140, 'Vertical', 70, 70, 'secondChild', 70, 70)
      .clickAddNewChildButton()
      // Add third children
      .addChild('Orange', 210, 140, 'Vertical', 70, 70, 'thirdChild', 70, 70)
      .clickAddNewChildButton()
      // Add fourth children
      .addChild('Orange', 210, 140, 'Vertical', 70, 70, 'fourthChild', 70, 70)
      .clickAddNewChildButton()
      // Add fifth children
      .addChild('Orange', 210, 140, 'Vertical', 70, 70, 'fifthChild', 70, 70)
      .clickAddNewChildButton()
      // Add sixth children
      .addChild('Orange', 210, 140, 'Vertical', 70, 70, 'sixthChild', 70, 70)
      .clickAddNewChildButton()
      // Check rendered children/result
      .checkScreenshot('@renderedResultArea')
      // Check rendered first children's CSS value
      .assert.containsText('@renderedFirstChild', 'firstChild')
      .verify.attributeContains('@renderedFirstChild', 'width', '70')
      .verify.attributeContains('@renderedFirstChild', 'height', '70')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered second children's CSS value
      .assert.containsText('@renderedSecondChild', 'secondChild')
      .verify.attributeContains('@renderedSecondChild', 'width', '70')
      .verify.attributeContains('@renderedSecondChild', 'height', '70')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered third children's CSS value
      .assert.containsText('@renderedThirdChild', 'thirdChild')
      .verify.attributeContains('@renderedThirdChild', 'width', '70')
      .verify.attributeContains('@renderedThirdChild', 'height', '70')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered fourth children's CSS value
      .assert.containsText('@renderedFourthChild', 'fourthChild')
      .verify.attributeContains('@renderedFourthChild', 'width', '70')
      .verify.attributeContains('@renderedFourthChild', 'height', '70')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered fifth children's CSS value
      .assert.containsText('@renderedFifthChild', 'fifthChild')
      .verify.attributeContains('@renderedFifthChild', 'width', '70')
      .verify.attributeContains('@renderedFifthChild', 'height', '70')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered sixth children's CSS value
      .assert.containsText('@renderedSixthChild', 'sixthChild')
      .verify.attributeContains('@renderedSixthChild', 'width', '70')
      .verify.attributeContains('@renderedSixthChild', 'height', '70')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
