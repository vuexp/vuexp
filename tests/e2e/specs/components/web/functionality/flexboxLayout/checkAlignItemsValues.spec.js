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
  'C13842856 - Props /Name: alignItems, type : String , value : flex-start, flex-end, center, baseline, stretch(default)'() {
    this.currentPage
      // Check initial elements of the page
      .checkInitialElements()
      // Remove all children so that rendered result can be empty
      .clickRemoveAllChildrenButton()
      // Set container properties
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'flex-start', 'stretch')
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

    // Verify Align Items value is flex-start
    const alignItemsFlexStartCSS = 'place-content: stretch flex-start;';
    this.currentPage.verify.attributeContains('@renderedContainer', 'style', alignItemsFlexStartCSS);

    // Verify Align Items value is flex-end
    const alignItemsFlexEndCSS = 'place-content: stretch flex-start;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'flex-end', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', alignItemsFlexEndCSS);

    // Verify Align Items value is center
    const alignItemsCenterCSS = 'place-content: stretch flex-start;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'center', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', alignItemsCenterCSS);

    // Verify Align Items value is baseline
    const alignItemsBaselineCSS = 'place-content: stretch flex-start;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'baseline', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', alignItemsBaselineCSS);

    // Verify Align Items value is stretch
    const alignItemsStretchCSS = 'place-content: stretch flex-start;';
    this.currentPage
      .setContainerProperties('auto', 'auto', 'red', 'row', 'nowrap', 'flex-start', 'stretch', 'stretch')
      .verify.attributeContains('@renderedContainer', 'style', alignItemsStretchCSS);
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
