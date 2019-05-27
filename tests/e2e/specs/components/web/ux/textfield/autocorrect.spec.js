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
  'Check textfield  autoCorrect ON'() {
    this.currentPage.setTextToTextField('hllbbbbbbbbbbo').checkScreenshot('@textFieldInputField');
  },
  'Check textfield autoCorrect OFF'() {
    this.currentPage.setTextToTextField('hllo').checkScreenshot('@textFieldInputField');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
