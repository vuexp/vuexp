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
  'C13842834 - Props /Name: flexDirection, type : String , value : row,row-reverse, column, column-reverse'() {
    this.currentPage
      // Check initial elements of the page
      .checkInitialElements()
      // Remove all children so that rendered result can be empty
      .clickRemoveAllChildrenButton()
      // Set container properties
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'stretch', 'stretch')
      // Set and add first children
      .setChildProperties('firstChildren', 'auto', 'auto', 'red', 0, 0, 1, 'stretch')
      .clickAddChildButton()
      // Set and add second children
      .setChildProperties('secondChildren', 'auto', 'auto', 'green', 0, 0, 1, 'stretch')
      .clickAddChildButton()
      // Set and add third children
      .setChildProperties('thirdChildren', 'auto', 'auto', 'blue', 0, 0, 1, 'stretch')
      .clickAddChildButton()
      // Set and add fourth children
      .setChildProperties('fourthChildren', 'auto', 'auto', 'yellow', 0, 0, 1, 'stretch')
      .clickAddChildButton()
      // Check rendered result and rendered children
      .checkRenderedChildrenResult();

    // Verify Flex Direction value is row
    const flexDirectionRowCSS =
      // Style CSS output of the result
      'flex-flow: row nowrap; place-content: stretch flex-start; align-items: stretch; background-color: red; width: auto; height: auto;';
    this.currentPage.verify.attributeContains('@renderedContainer', 'style', flexDirectionRowCSS);

    // Verify flex direction value is row-reverse
    const flexDirectionRowReverseCSS =
      // Style CSS output of the result
      'flex-flow: row-reverse nowrap; place-content: stretch flex-start; align-items: stretch; background-color: red; width: auto; height: auto;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row-reverse', 'nowrap', 'flex-start', 'stretch', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', flexDirectionRowReverseCSS);

    // Verify flex direction value is column
    const flexDirectionColumnCSS =
      // Style CSS output of the result
      'flex-flow: column nowrap; place-content: stretch flex-start; align-items: stretch; background-color: red; width: auto; height: auto;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'column', 'nowrap', 'flex-start', 'stretch', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', flexDirectionColumnCSS);

    // Verify flex direction value is column-reverse
    const flexDirectionColumnReverseCSS =
      // Style CSS output of the result
      'flex-flow: column-reverse nowrap; place-content: stretch flex-start; align-items: stretch; background-color: red; width: auto; height: auto;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'column-reverse', 'nowrap', 'flex-start', 'stretch', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', flexDirectionColumnReverseCSS);
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
