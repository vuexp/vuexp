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
  'C13840784 Check textfield focus'() {
    this.currentPage.focus().assert.containsText('@eventOutput', 'focus');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
