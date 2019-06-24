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
  'C13842870 - Child Props /Name: flexWrapBefore , type : Boolean , value : false (default),true'() {
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
      // Check Flex Wrap Before check-box is not selected and it has no "flexwrapbefore" CSS attribute
      .expect.element('@childFlexWrapBeforeCheckbox')
      .to.not.have.attribute('flexwrapbefore');

    // Clear all data to check Flex Wrap Before prop

    // Remove all children so that rendered result can be empty
    this.currentPage
      .clickRemoveAllChildrenButton()
      // Set Flex Wrap Before check-box
      .clickChildFlexWrapBefore()
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
      // Check flex wrap before type of first child
      .verify.attributeContains('@firstChildren', 'flexwrapbefore', 'true')
      // Check flex wrap before type of second child
      .verify.attributeContains('@secondChildren', 'flexwrapbefore', 'true')
      // Check flex wrap before type of third child
      .verify.attributeContains('@thirdChildren', 'flexwrapbefore', 'true')
      // Check flex wrap before type of fourth child
      .verify.attributeContains('@fourthChildren', 'flexwrapbefore', 'true');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
