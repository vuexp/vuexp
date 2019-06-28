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
  'C13897444 - Props/Name: hint , Type : string'() {
    let exampleText = 'multiSelectDropdown - Select an item - Test';

    this.currentPage
      .checkInitialElements()
      .setHintInputField(exampleText)
      .checkInitialElements()
      .verify.attributeContains('@selectItemsDropdown', 'placeholder', exampleText);
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
