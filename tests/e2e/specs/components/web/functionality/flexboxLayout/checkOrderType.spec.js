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
  'C13842864 - Child Props /Name: order , type : Number'() {
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
      .setChildProperties('secondChildren', 'auto', 'auto', 'green', 1, 0, 1, 'stretch')
      .clickAddChildButton()
      // Set and add third children
      .setChildProperties('thirdChildren', 'auto', 'auto', 'blue', 2, 0, 1, 'stretch')
      .clickAddChildButton()
      // Set and add fourth children
      .setChildProperties('fourthChildren', 'auto', 'auto', 'yellow', 3, 0, 1, 'stretch')
      .clickAddChildButton()
      // Check rendered result and rendered children
      .checkRenderedChildrenResult()

      // Check order number of first child
      .verify.attributeContains('@firstChildren', 'order', 0)
      // Check order number of second child
      .verify.attributeContains('@secondChildren', 'order', 1)
      // Check order number of third child
      .verify.attributeContains('@thirdChildren', 'order', 2)
      // Check order number of fourth child
      .verify.attributeContains('@fourthChildren', 'order', 3)

      // Get screenshot for rendered container result
      .checkScreenshot('@renderedContainer');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
