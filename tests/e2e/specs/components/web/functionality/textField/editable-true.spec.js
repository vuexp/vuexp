module.exports = {
  tags: ['component', 'Textfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textfieldPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13840776 Check textfield editable true as a default'() {
    this.currentPage
      .setTextToTextField('editabletu')
      .assert.attributeContains('@textFieldInputField', 'style', '')
      .assert.attributeContains('@textFieldInputField', 'value', 'editabletu');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
