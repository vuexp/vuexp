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
  '	C13840778 Check textfield not secure'() {
    this.currentPage.setTextToTextField('Not secure').uncheckSecure();
  },
  '	C13840778 Check textfield secure'() {
    this.currentPage.setTextToTextField('Secure').checkSecure();
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
