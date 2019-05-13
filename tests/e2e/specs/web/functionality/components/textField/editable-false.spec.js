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
  'Check textfield editable false'() {
    this.currentPage
      .click('@editableCheckButton')
      .assert.attributeContains('@textFieldInputField', 'style', 'disabled:disabled')
      .setTextToTextField('textfield-editable-test')
      .assert.containsText('@textFieldInputField', '');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
