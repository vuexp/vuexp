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
  'C13842869 - Child Props /Name: alignSelf , type : String , value : flex-start, flex-end, center, baseline, stretch(default)'() {
    this.currentPage
      // Check initial elements of the page
      .checkInitialElements()
      // Remove all children so that rendered result can be empty
      .clickRemoveAllChildrenButton()
      // Set container properties
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'flex-start', 'flex-start')
      // Set and add first children
      .setChildProperties('firstChildren', 'auto', 'auto', 'red', 0, 0, 1, 'flex-start')
      .clickAddChildButton()
      // Set and add second children
      .setChildProperties('secondChildren', 'auto', 'auto', 'green', 1, 1, 2, 'flex-end')
      .clickAddChildButton()
      // Set and add third children
      .setChildProperties('thirdChildren', 'auto', 'auto', 'blue', 2, 2, 3, 'center')
      .clickAddChildButton()
      // Set and add fourth children
      .setChildProperties('fourthChildren', 'auto', 'auto', 'yellow', 3, 3, 4, 'baseline')
      .clickAddChildButton()
      // Check rendered result and rendered children
      .checkRenderedChildrenResult()

      // Check align self type of first child
      .verify.attributeContains('@firstChildren', 'alignself', 'flex-start')
      // Check align self type of second child
      .verify.attributeContains('@secondChildren', 'alignself', 'flex-end')
      // Check align self type of third child
      .verify.attributeContains('@thirdChildren', 'alignself', 'center')
      // Check align self type of fourth child
      .verify.attributeContains('@fourthChildren', 'alignself', 'baseline')

      // Get screenshot for rendered container result
      .checkScreenshot('@renderedContainer');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
