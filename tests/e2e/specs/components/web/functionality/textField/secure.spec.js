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
  'C13840778 Props /Name: Secure , type : Boolean'() {
    this.currentPage
      .setTextToTextField('Not secure')
      .checkScreenshot('@textFieldInputField')
      .uncheckSecure()
      .checkScreenshot('@textFieldInputField')
      .checkSecure();
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
