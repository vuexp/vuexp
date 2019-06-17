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
  'C13842592 - Props /Name: itemWidth, itemHeight , Value: default (Number.NaN)'() {
    this.currentPage
      .checkInitialElements()
      // Clear default children for empty rendered result so that test result can be more clear
      .clickRemoveChildButton()
      // Add first children
      .addChild('red', 450, 300, 'Vertical', 150, 150, 'firstChild', 150, 150)
      .clickAddNewChildButton()
      // Add second children
      .addChild('red', 450, 300, 'Vertical', 150, 150, 'secondChild', 150, 150)
      .clickAddNewChildButton()
      // Add third children
      .addChild('red', 450, 300, 'Vertical', 150, 150, 'thirdChild', 150, 150)
      .clickAddNewChildButton()
      // Add fourth children
      .addChild('red', 450, 300, 'Vertical', 150, 150, 'fourthChild', 150, 150)
      .clickAddNewChildButton()
      // Add fifth children
      .addChild('red', 450, 300, 'Vertical', 150, 150, 'fifthChild', 150, 150)
      .clickAddNewChildButton()
      // Add sixth children
      .addChild('red', 450, 300, 'Vertical', 150, 150, 'sixthChild', 150, 150)
      .clickAddNewChildButton()
      // Check rendered children/result
      .checkScreenshot('@renderedResultArea')
      // Check rendered first children's CSS value
      .assert.containsText('@renderedFirstChild', 'firstChild')
      .verify.attributeContains('@renderedFirstChild', 'width', '150')
      .verify.attributeContains('@renderedFirstChild', 'height', '150')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered second children's CSS value
      .assert.containsText('@renderedSecondChild', 'secondChild')
      .verify.attributeContains('@renderedSecondChild', 'width', '150')
      .verify.attributeContains('@renderedSecondChild', 'height', '150')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered third children's CSS value
      .assert.containsText('@renderedThirdChild', 'thirdChild')
      .verify.attributeContains('@renderedThirdChild', 'width', '150')
      .verify.attributeContains('@renderedThirdChild', 'height', '150')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered fourth children's CSS value
      .assert.containsText('@renderedFourthChild', 'fourthChild')
      .verify.attributeContains('@renderedFourthChild', 'width', '150')
      .verify.attributeContains('@renderedFourthChild', 'height', '150')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered fifth children's CSS value
      .assert.containsText('@renderedFifthChild', 'fifthChild')
      .verify.attributeContains('@renderedFifthChild', 'width', '150')
      .verify.attributeContains('@renderedFifthChild', 'height', '150')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered sixth children's CSS value
      .assert.containsText('@renderedSixthChild', 'sixthChild')
      .verify.attributeContains('@renderedSixthChild', 'width', '150')
      .verify.attributeContains('@renderedSixthChild', 'height', '150')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
