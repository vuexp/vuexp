module.exports = {
  tags: ['component', 'multiSelectDropdown'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.multiSelectDropdownPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxpmultiselectdropdown.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13897446 - Events/Name : selectedChange'() {
    let exampleFirstText = 'firstItem';
    let exampleSecondText = 'secondItem';
    let exampleThirdText = 'thirdItem';
    let checkboxCheckedCSS = 'vxp-absolute-layout vxp-checkbox vxp-checkbox--checked';

    this.currentPage
      .checkInitialElements()
      .clickClearItemsButton()
      .clickAddNewItemButton()
      .addFirstNewItem(exampleFirstText)
      .clickAddNewItemButton()
      .addSecondNewItem(exampleSecondText)
      .clickAddNewItemButton()
      .addThirdNewItem(exampleThirdText)
      .clickSelectItemsDropdown()
      .checkAddedItemsOptions()
      .clickAddedFirstItemCheckbox()
      .clickAddedSecondItemCheckbox()
      .clickAddedThirdItemCheckbox()
      .verify.attributeContains('@firstItemSelectbox', 'class', checkboxCheckedCSS)
      .verify.attributeContains('@secondItemSelectbox', 'class', checkboxCheckedCSS)
      .verify.attributeContains('@thirdItemSelectbox', 'class', checkboxCheckedCSS)
      .checkSelectedItemIndexes()
      .assert.containsText('@selectedItemsIndexesLabel', exampleFirstText + ',' + exampleSecondText + ',' + exampleThirdText);
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
