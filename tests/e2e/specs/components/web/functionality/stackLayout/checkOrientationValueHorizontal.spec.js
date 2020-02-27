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
  'C13842599 - Props /Name:orientation, Value: horizontal'() {
    this.currentPage
      .checkInitialElements()
      // Clear default children for empty rendered result so that test result can be more clear
      .clickRemoveAllChildrenButton()
      // Add first children
      .addChild('horizontal', 'firstChild', 60, 60, 'red', 'horizontalAlignment', 'top')
      .clickAddChildButton()
      // Add second children
      .addChild('horizontal', 'secondChild', 65, 65, 'green', 'horizontalAlignment', 'top')
      .clickAddChildButton()
      // Add third children
      .addChild('horizontal', 'thirdChild', 70, 70, 'yellow', 'horizontalAlignment', 'top')
      .clickAddChildButton()
      // Add fourth children
      .addChild('horizontal', 'fourthChild', 75, 75, 'blue', 'horizontalAlignment', 'top')
      .clickAddChildButton()
      // Check rendered first children's dock type
      .assert.containsText('@firstRenderedChild', 'firstChild')
      .verify.attributeContains('@firstRenderedChild', 'width', '60')
      .verify.attributeContains('@firstRenderedChild', 'height', '60')
      .verify.attributeContains('@firstRenderedChild', 'backgroundcolor', 'red')
      .verify.attributeContains('@firstRenderedChild', 'horizontalalignment', 'top')
      // Check rendered second children's dock type
      .assert.containsText('@secondRenderedChild', 'secondChild')
      .verify.attributeContains('@secondRenderedChild', 'width', '65')
      .verify.attributeContains('@secondRenderedChild', 'height', '65')
      .verify.attributeContains('@secondRenderedChild', 'backgroundcolor', 'green')
      .verify.attributeContains('@secondRenderedChild', 'horizontalalignment', 'top')
      // Check rendered third children's dock type
      .assert.containsText('@thirdRenderedChild', 'thirdChild')
      .verify.attributeContains('@thirdRenderedChild', 'width', '70')
      .verify.attributeContains('@thirdRenderedChild', 'height', '70')
      .verify.attributeContains('@thirdRenderedChild', 'backgroundcolor', 'yellow')
      .verify.attributeContains('@thirdRenderedChild', 'horizontalalignment', 'top')
      // Check rendered fourth children's dock type
      .assert.containsText('@fourthRenderedChild', 'fourthChild')
      .verify.attributeContains('@fourthRenderedChild', 'width', '75')
      .verify.attributeContains('@fourthRenderedChild', 'height', '75')
      .verify.attributeContains('@fourthRenderedChild', 'backgroundcolor', 'blue')
      .verify.attributeContains('@fourthRenderedChild', 'horizontalalignment', 'top')
      // Check rendered children/result and get rendered result's screenshots
      .checkRenderedResult()
      .checkScreenshot('@renderedResultArea');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
