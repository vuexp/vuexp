module.exports = {
  tags: ['layouts', 'dockLayout'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.dockLayoutPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'layouts/dock-layout.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13842583 - Props /Name: stretchLastChild, type : Boolean , value : Default (false)'() {
    this.currentPage
      .checkInitialElements()
      // Clear default children for empty rendered result so that test result can be more clear
      .clickRemoveAllChildrenButton()
      // Add first children
      .setText('firstChild')
      .setWidth('20')
      .setHeight('35')
      .setColor('red')
      .setDock('right')
      .clickAddChildButton()
      // Add second children
      .setText('secondChild')
      .setWidth('45')
      .setHeight('15')
      .setColor('blue')
      .setDock('bottom')
      .clickAddChildButton()
      // Add third children
      .setText('thirdChild')
      .setWidth('75')
      .setHeight('115')
      .setColor('yellow')
      .setDock('left')
      .clearValue('@textInputField')
      .clickAddChildButton()
      // Add fourth children
      .setText('fourthChild')
      .setWidth('10')
      .setHeight('90')
      .setColor('cyan')
      .setDock('top')
      .clickAddChildButton()
      .checkRenderedChildren()
      .checkRenderedResult()
      // Check rendered first children's CSS value
      .verify.attributeContains('@renderedFirstChildren', 'width', '20')
      .verify.attributeContains('@renderedFirstChildren', 'height', '35')
      .verify.attributeContains('@renderedFirstChildren', 'backgroundcolor', 'red')
      .verify.attributeContains('@renderedFirstChildren', 'dock', 'right')
      .assert.containsText('@renderedFirstChildren', 'firstChild')
      // Check rendered second children's CSS value
      .verify.attributeContains('@renderedSecondChildren', 'width', '45')
      .verify.attributeContains('@renderedSecondChildren', 'height', '15')
      .verify.attributeContains('@renderedSecondChildren', 'backgroundcolor', 'blue')
      .verify.attributeContains('@renderedSecondChildren', 'dock', 'bottom')
      .assert.containsText('@renderedSecondChildren', 'secondChild')
      // Check rendered third children's CSS value
      .verify.attributeContains('@renderedThirdChildren', 'width', '75')
      .verify.attributeContains('@renderedThirdChildren', 'height', '115')
      .verify.attributeContains('@renderedThirdChildren', 'backgroundcolor', 'yellow')
      .verify.attributeContains('@renderedThirdChildren', 'dock', 'left')
      .assert.containsText('@renderedThirdChildren', 'thirdChild')
      // Check rendered fourth children's CSS value
      .verify.attributeContains('@renderedFourthChildren', 'width', '10')
      .verify.attributeContains('@renderedFourthChildren', 'height', '90')
      .verify.attributeContains('@renderedFourthChildren', 'backgroundcolor', 'cyan')
      .verify.attributeContains('@renderedFourthChildren', 'dock', 'top')
      .assert.containsText('@renderedFourthChildren', 'fourthChild')
      // Get rendered result's screenshots
      .checkScreenshot('@renderedResultArea');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
