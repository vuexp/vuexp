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
  'C13840785 Event / Name : blur'() {
    this.currentPage
      .checkInitialElements()
      .blur()
      .assert.containsText('@eventOutput', 'blur');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
