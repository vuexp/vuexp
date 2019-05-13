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
  'Check textfield editable true as a default'() {
    this.currentPage
      .setTextToTextField('editable-test')
      .assert.attributeContains('@textFieldInputField', 'style', '')
      .assert.containsText('@textFieldInputField', 'editable-test');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
