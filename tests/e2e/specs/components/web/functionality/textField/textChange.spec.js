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
  'C13840795 Event / Name : textChange'() {
    this.currentPage.setTextToTextField('textChange text').assert.containsText('@eventOutput', 'textChange');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
