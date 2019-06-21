module.exports = {
  tags: ['layouts', 'flexboxLayout'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.flexboxLayoutPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'layouts/flexbox-layout.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13842866 - Child Props /Name: flexGrow , type : Number'() {
    this.currentPage
      // Check initial elements of the page
      .checkInitialElements()
      // Remove all children so that rendered result can be empty
      .clickRemoveAllChildrenButton()
      // Set container properties
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'flex-start', 'flex-start')
      // Set and add first children
      .setChildProperties('firstChildren', 'auto', 'auto', 'red', 0, 0, 1, 'stretch')
      .clickAddChildButton()
      // Set and add second children
      .setChildProperties('secondChildren', 'auto', 'auto', 'green', 1, 1, 1, 'stretch')
      .clickAddChildButton()
      // Set and add third children
      .setChildProperties('thirdChildren', 'auto', 'auto', 'blue', 2, 2, 1, 'stretch')
      .clickAddChildButton()
      // Set and add fourth children
      .setChildProperties('fourthChildren', 'auto', 'auto', 'yellow', 3, 3, 1, 'stretch')
      .clickAddChildButton()
      // Check rendered result and rendered children
      .checkRenderedChildrenResult()

      // Check flex-grow number of first child
      .verify.attributeContains('@firstChildren', 'flexgrow', 0)
      // Check flex-grow number of second child
      .verify.attributeContains('@secondChildren', 'flexgrow', 1)
      // Check flex-grow number of third child
      .verify.attributeContains('@thirdChildren', 'flexgrow', 2)
      // Check flex-grow number of fourth child
      .verify.attributeContains('@fourthChildren', 'flexgrow', 3)

      // Get screenshot for rendered container result
      .checkScreenshot('@renderedContainer');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
