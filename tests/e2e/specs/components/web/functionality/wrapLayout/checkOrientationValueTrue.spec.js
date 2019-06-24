module.exports = {
  tags: ['layouts', 'wrapLayout'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.wrapLayoutPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'layouts/wraplayout.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13842591 - Props /Name:orientation, Value: true'() {
    this.currentPage
      .checkInitialElements()
      // Clear default children for empty rendered result so that test result can be more clear
      .clickRemoveChildButton()
      // Add first children
      .addChild('orange', 360, 240, 'Vertical', 120, 120, 'firstChild', 120, 120)
      .clickAddNewChildButton()
      // Add second children
      .addChild('orange', 360, 240, 'Vertical', 120, 120, 'secondChild', 120, 120)
      .clickAddNewChildButton()
      // Add third children
      .addChild('orange', 360, 240, 'Vertical', 120, 120, 'thirdChild', 120, 120)
      .clickAddNewChildButton()
      // Add fourth children
      .addChild('orange', 360, 240, 'Vertical', 120, 120, 'fourthChild', 120, 120)
      .clickAddNewChildButton()
      // Add fifth children
      .addChild('orange', 360, 240, 'Vertical', 120, 120, 'fifthChild', 120, 120)
      .clickAddNewChildButton()
      // Add sixth children
      .addChild('orange', 360, 240, 'Vertical', 120, 120, 'sixthChild', 120, 120)
      .clickAddNewChildButton()
      // Check rendered children/result
      .checkScreenshot('@renderedResultArea')
      // Check rendered first children's CSS value
      .assert.containsText('@renderedFirstChild', 'firstChild')
      .verify.attributeContains('@renderedFirstChild', 'width', '120')
      .verify.attributeContains('@renderedFirstChild', 'height', '120')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered second children's CSS value
      .assert.containsText('@renderedSecondChild', 'secondChild')
      .verify.attributeContains('@renderedSecondChild', 'width', '120')
      .verify.attributeContains('@renderedSecondChild', 'height', '120')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered third children's CSS value
      .assert.containsText('@renderedThirdChild', 'thirdChild')
      .verify.attributeContains('@renderedThirdChild', 'width', '120')
      .verify.attributeContains('@renderedThirdChild', 'height', '120')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered fourth children's CSS value
      .assert.containsText('@renderedFourthChild', 'fourthChild')
      .verify.attributeContains('@renderedFourthChild', 'width', '120')
      .verify.attributeContains('@renderedFourthChild', 'height', '120')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered fifth children's CSS value
      .assert.containsText('@renderedFifthChild', 'fifthChild')
      .verify.attributeContains('@renderedFifthChild', 'width', '120')
      .verify.attributeContains('@renderedFifthChild', 'height', '120')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;')
      // Check rendered sixth children's CSS value
      .assert.containsText('@renderedSixthChild', 'sixthChild')
      .verify.attributeContains('@renderedSixthChild', 'width', '120')
      .verify.attributeContains('@renderedSixthChild', 'height', '120')
      .verify.attributeContains('@renderedResultArea', 'style', 'flex-direction: column;');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
