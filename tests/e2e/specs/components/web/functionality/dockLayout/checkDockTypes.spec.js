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
  'C13842585 - Child Props/Name : dock, type : top, right, bottom, left'() {
    this.currentPage
      .checkInitialElements()
      // Clear default children for empty rendered result so that test result can be more clear
      .clickRemoveAllChildrenButton()
      // Mark stretch last child checkbox for value which should be true
      .clickStretchLastChildCheckbox()
      // Add first children
      .addChildren('firstChild', 20, 35, 'red', 'right')
      .clickAddChildButton()
      // Add second children
      .addChildren('secondChild', 45, 15, 'blue', 'bottom')
      .clickAddChildButton()
      // Add third children
      .addChildren('thirdChild', 75, 115, 'yellow', 'left')
      .clickAddChildButton()
      // Add fourth children
      .addChildren('fourthChild', 10, 90, 'cyan', 'top')
      .clickAddChildButton()
      .checkRenderedChildren()
      .checkRenderedResult()
      // Check rendered first children's dock type
      .verify.attributeContains('@renderedFirstChildren', 'dock', 'right')
      // Check rendered second children's dock type
      .verify.attributeContains('@renderedSecondChildren', 'dock', 'bottom')
      // Check rendered third children's dock type
      .verify.attributeContains('@renderedThirdChildren', 'dock', 'left')
      // Check rendered fourth children's dock type
      .verify.attributeContains('@renderedFourthChildren', 'dock', 'top')
      // Get rendered result's screenshots
      .checkScreenshot('@renderedResultArea');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
