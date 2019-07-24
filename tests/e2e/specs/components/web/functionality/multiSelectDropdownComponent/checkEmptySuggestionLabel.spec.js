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
  'C13897445 - Props/Name : emptySuggestionsLabel , Type :string'() {
    let emptySuggestionText = 'multiSelectDropdown - There is no suggestion test text';
    let exampleFirstText = 'firstItem';
    let exampleSecondText = 'secondItem';
    let exampleThirdText = 'thirdItem';

    this.currentPage
      .checkInitialElements()
      .setEmptySuggestionLabelInputField(emptySuggestionText)
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
      .clickSelectItemsDropdown()
      .checkEmptySuggestionOption()
      .assert.containsText('@selectItemsDropdownEmptyOption', emptySuggestionText);
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
