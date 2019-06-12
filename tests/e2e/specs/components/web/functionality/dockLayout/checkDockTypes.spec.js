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
      .clearValue('@textInputField')
      .setValue('@textInputField', 'firstChild')
      .clearValue('@widthInputField')
      .setValue('@widthInputField', '20')
      .clearValue('@heightInputField')
      .setValue('@heightInputField', '35')
      .setValue('@colorSelectbox', 'red')
      .setValue('@dockSelectbox', 'right')
      .clickAddChildButton()
      // Add second children
      .clearValue('@textInputField')
      .setValue('@textInputField', 'secondChild')
      .clearValue('@widthInputField')
      .setValue('@widthInputField', '45')
      .clearValue('@heightInputField')
      .setValue('@heightInputField', '15')
      .setValue('@colorSelectbox', 'blue')
      .setValue('@dockSelectbox', 'bottom')
      .clickAddChildButton()
      // Add third children
      .clearValue('@textInputField')
      .setValue('@textInputField', 'thirdChild')
      .clearValue('@widthInputField')
      .setValue('@widthInputField', '75')
      .clearValue('@heightInputField')
      .setValue('@heightInputField', '115')
      .setValue('@colorSelectbox', 'yellow')
      .setValue('@dockSelectbox', 'left')
      .clickAddChildButton()
      // Add fourth children
      .clearValue('@textInputField')
      .setValue('@textInputField', 'fourthChild')
      .clearValue('@widthInputField')
      .setValue('@widthInputField', '10')
      .clearValue('@heightInputField')
      .setValue('@heightInputField', '90')
      .setValue('@colorSelectbox', 'cyan')
      .setValue('@dockSelectbox', 'top')
      .clickAddChildButton()
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
