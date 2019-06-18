module.exports = {
  tags: ['component', 'textfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textFieldPage();
    this.currentPage
      .navigate('http://localhost:8080/components/textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  '	C13840810 Check textfield editable false'() {
    this.currentPage
      .click('@editableCheckButton')
      .waitForElementPresent('@textFieldInputField', 3000)
      .assert.attributeEquals('@textFieldInputField', 'disabled', 'true')
      .setTextToTextField('editablefa')
      .assert.attributeContains('@textFieldInputField', 'value', '');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
