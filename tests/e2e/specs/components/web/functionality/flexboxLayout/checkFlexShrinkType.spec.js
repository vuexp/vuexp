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
  'C13842868 - Child Props /Name: flexShrink , type : Number , value : 1 (default)'() {
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
      .setChildProperties('secondChildren', 'auto', 'auto', 'green', 1, 1, 2, 'stretch')
      .clickAddChildButton()
      // Set and add third children
      .setChildProperties('thirdChildren', 'auto', 'auto', 'blue', 2, 2, 3, 'stretch')
      .clickAddChildButton()
      // Set and add fourth children
      .setChildProperties('fourthChildren', 'auto', 'auto', 'yellow', 3, 3, 4, 'stretch')
      .clickAddChildButton()
      // Check rendered result and rendered children
      .checkRenderedChildrenResult()

      // Check flex-shrink number of first child
      .verify.attributeContains('@firstChildren', 'flexshrink', 1)
      // Check flex-shrink number of second child
      .verify.attributeContains('@secondChildren', 'flexshrink', 2)
      // Check flex-shrink number of third child
      .verify.attributeContains('@thirdChildren', 'flexshrink', 3)
      // Check flex-shrink number of fourth child
      .verify.attributeContains('@fourthChildren', 'flexshrink', 4)

      // Get screenshot for rendered container result
      .checkScreenshot('@renderedContainer');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
