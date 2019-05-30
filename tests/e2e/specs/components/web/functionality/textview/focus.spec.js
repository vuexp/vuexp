module.exports = {
  tags: ['component', 'textView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textviewPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/textview.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843256 Event / Name : focus'() {
    this.currentPage.click('@textview').assert.containsText('@eventOutput', 'focus');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
