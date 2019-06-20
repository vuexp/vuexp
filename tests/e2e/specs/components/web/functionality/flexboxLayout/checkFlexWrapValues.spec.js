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
  'C13842838 - Props /Name: flexWrap, type : String , value : nowrap (default) ,wrap,wrap-reverse'() {
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

    // Verify Flex Wrap value is no-wrap
    const flexWrapNowrapCSS = 'flex-flow: row nowrap;';
    this.currentPage.verify.attributeContains('@renderedContainer', 'style', flexWrapNowrapCSS);

    // Verify flex direction value is wrap
    const flexWrapWrapCSS = 'flex-flow: row wrap;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'wrap', 'flex-start', 'stretch', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', flexWrapWrapCSS);

    // Verify flex direction value is wrap-reverse
    const flexWrapWrapReverseCSS = 'flex-flow: row wrap-reverse;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'wrap-reverse', 'flex-start', 'stretch', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', flexWrapWrapReverseCSS);
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
