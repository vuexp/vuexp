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
  'C13840774 Props /Name:text, type : String'() {
    this.currentPage.setTextToText('textfield-').assert.attributeContains('@textFieldInputField', 'value', 'textfield-');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
