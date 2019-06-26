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
  'C13840810 Props/Name: editable, type : Boolean , value : false'() {
    this.currentPage
      .checkEditableTextField()
      .waitForElementPresent('@textFieldInputField', 3000)
      .assert.attributeEquals('@textFieldInputField', 'disabled', 'true')
      .setTextToTextField('editablefa')
      .assert.attributeContains('@textFieldInputField', 'value', '');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
