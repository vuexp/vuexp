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
  'C13842862 - Props /Name: alignContent, type : String , value : flex-start, flex-end, center, space-between, space-around,stretch (default)'() {
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

    // Verify Align Content value is flex-start
    const alignContentFlexStartCSS =
      // Style CSS output of the result
      'flex-flow: row nowrap; place-content: flex-start; align-items: flex-start; background-color: red; width: auto; height: auto;';
    this.currentPage.verify.attributeContains('@renderedContainer', 'style', alignContentFlexStartCSS);

    // Verify Align Content value is flex-end
    const alignContentFlexEndCSS =
      // Style CSS output of the result
      'flex-flow: row nowrap; place-content: flex-end flex-start; align-items: flex-start; background-color: red; width: auto; height: auto;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'flex-start', 'flex-end')
      .verify.attributeContains('@renderedContainer', 'style', alignContentFlexEndCSS);

    // Verify Align Content value is center
    const alignContentCenterCSS =
      // Style CSS output of the result
      'flex-flow: row nowrap; place-content: center flex-start; align-items: flex-start; background-color: red; width: auto; height: auto;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'flex-start', 'center')
      .verify.attributeContains('@renderedContainer', 'style', alignContentCenterCSS);

    // Verify Align Content value is space-between
    const alignContentSpaceBetweenCSS =
      // Style CSS output of the result
      'flex-flow: row nowrap; place-content: space-between flex-start; align-items: flex-start; background-color: red; width: auto; height: auto;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'flex-start', 'space-between')
      .verify.attributeContains('@renderedContainer', 'style', alignContentSpaceBetweenCSS);

    // Verify Align Content value is space-around
    const alignContentSpaceAroundCSS =
      // Style CSS output of the result
      'flex-flow: row nowrap; place-content: space-around flex-start; align-items: flex-start; background-color: red; width: auto; height: auto;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'flex-start', 'space-around')
      .verify.attributeContains('@renderedContainer', 'style', alignContentSpaceAroundCSS);

    // Verify Align Content value is stretch
    const alignContentStretchCSS =
      // Style CSS output of the result
      'flex-flow: row nowrap; place-content: stretch flex-start; align-items: flex-start; background-color: red; width: auto; height: auto;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'flex-start', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', alignContentStretchCSS);
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
