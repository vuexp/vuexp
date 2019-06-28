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
  'C13897442 - Props/Name: items , Type: Array'() {
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
      .clickSelectItemsDropdown()
      .checkAddedItemsOptions()
      .assert.containsText('@selectItemsDropdownFirstOption', exampleFirstText)
      .assert.containsText('@selectItemsDropdownSecondOption', exampleSecondText)
      .assert.containsText('@selectItemsDropdownThirdOption', exampleThirdText);
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
