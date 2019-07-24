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
  'C13897443 - Props/Name : selected(v-model) , Type : Array[number]'() {
    let exampleFirstText = 'firstItem';
    let exampleSecondText = 'secondItem';
    let exampleThirdText = 'thirdItem';

    this.currentPage
      .checkInitialElements()
      .clickClearItemsButton()
      .clickAddNewItemButton()
      .addFirstNewItem(exampleFirstText)
      .clickAddNewItemButton()
      .addSecondNewItem(exampleSecondText)
      .clickAddNewItemButton()
      .addThirdNewItem(exampleThirdText)
      .clickAddedFirstItemCheckbox()
      .clickAddedSecondItemCheckbox()
      .clickAddedThirdItemCheckbox()
      .checkAddedItemsPill()
      .assert.containsText('@selectItemsDropdownFirstPill', exampleFirstText)
      .assert.containsText('@selectItemsDropdownSecondPill', exampleSecondText)
      .assert.containsText('@selectItemsDropdownThirdPill', exampleThirdText)
      .checkSelectedItemIndexes()
      .assert.containsText('@selectedItemsIndexesLabel', exampleFirstText + ',' + exampleSecondText + ',' + exampleThirdText);
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
