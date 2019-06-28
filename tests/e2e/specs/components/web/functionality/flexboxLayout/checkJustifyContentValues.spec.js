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
  'C13842842 - Props /Name: justifyContent, type : String , value : flex-start (default), flex-end, center, space-between, space-around'() {
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

    // Verify Justify Content value is flex-start
    const justifyContentFlexStartCSS = 'place-content: stretch flex-start;';
    this.currentPage.verify.attributeContains('@renderedContainer', 'style', justifyContentFlexStartCSS);

    // Verify Justify Content value is flex-end
    const justifyContentFlexEndCSS = 'place-content: stretch flex-end;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-end', 'stretch', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', justifyContentFlexEndCSS);

    // Verify Justify Content value is center
    const justifyContentCenterCSS = 'place-content: stretch center;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'center', 'stretch', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', justifyContentCenterCSS);

    // Verify Justify Content value is space-between
    const justifyContentSpaceBetweenCSS = 'place-content: stretch space-between;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'space-between', 'stretch', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', justifyContentSpaceBetweenCSS);

    // Verify Justify Content value is space-around
    const justifyContentSpaceAroundCSS = 'place-content: stretch space-around;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'space-around', 'stretch', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', justifyContentSpaceAroundCSS);
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
