module.exports = {
  tags: ['component', 'textfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textFieldPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13840781 Props /Name: autocorrect, type : Boolean'() {
    this.currentPage
      .setTextToTextField('hllbbbbbbbbbbo ')
      .checkScreenshot('@textFieldInputField')
      .click('@autoCorrectCheck')
      .waitForElementVisible('@textFieldInputField', 1000)
      .click('@textFieldInputField')
      .checkScreenshot('@textFieldInputField');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
