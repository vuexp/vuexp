module.exports = {
  tags: ['layouts', 'stackLayout'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.stackLayoutPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'layouts/stacklayout.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13842598 - Props /Name:orientation, Value: default (vertical)'() {
    this.currentPage
      .checkInitialElements()
      // Clear default children for empty rendered result so that test result can be more clear
      .clickRemoveAllChildrenButton()
      // Add first children
      .addChild('vertical', 'firstChild', 60, 60, 'red', 'verticalAlignment', 'top')
      .clickAddChildButton()
      // Add second children
      .addChild('vertical', 'secondChild', 65, 65, 'green', 'verticalAlignment', 'top')
      .clickAddChildButton()
      // Add third children
      .addChild('vertical', 'thirdChild', 70, 70, 'yellow', 'verticalAlignment', 'top')
      .clickAddChildButton()
      // Add fourth children
      .addChild('vertical', 'fourthChild', 75, 75, 'blue', 'verticalAlignment', 'top')
      .clickAddChildButton()
      // Check rendered first children's CSS value
      .assert.containsText('@firstRenderedChild', 'firstChild')
      .verify.attributeContains('@firstRenderedChild', 'width', '60')
      .verify.attributeContains('@firstRenderedChild', 'height', '60')
      .verify.attributeContains('@firstRenderedChild', 'backgroundcolor', 'red')
      .verify.attributeContains('@firstRenderedChild', 'verticalalignment', 'top')
      // Check rendered second children's CSS value
      .assert.containsText('@secondRenderedChild', 'secondChild')
      .verify.attributeContains('@secondRenderedChild', 'width', '65')
      .verify.attributeContains('@secondRenderedChild', 'height', '65')
      .verify.attributeContains('@secondRenderedChild', 'backgroundcolor', 'green')
      .verify.attributeContains('@secondRenderedChild', 'verticalalignment', 'top')
      // Check rendered third children's CSS value
      .assert.containsText('@thirdRenderedChild', 'thirdChild')
      .verify.attributeContains('@thirdRenderedChild', 'width', '70')
      .verify.attributeContains('@thirdRenderedChild', 'height', '70')
      .verify.attributeContains('@thirdRenderedChild', 'backgroundcolor', 'yellow')
      .verify.attributeContains('@thirdRenderedChild', 'verticalalignment', 'top')
      // Check rendered fourth children's CSS value
      .assert.containsText('@fourthRenderedChild', 'fourthChild')
      .verify.attributeContains('@fourthRenderedChild', 'width', '75')
      .verify.attributeContains('@fourthRenderedChild', 'height', '75')
      .verify.attributeContains('@fourthRenderedChild', 'backgroundcolor', 'blue')
      .verify.attributeContains('@fourthRenderedChild', 'verticalalignment', 'top')
      // Check rendered children/result and get rendered result's screenshots
      .checkRenderedResult()
      .checkScreenshot('@renderedResultArea');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
