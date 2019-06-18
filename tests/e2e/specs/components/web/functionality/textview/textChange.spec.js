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
  'C13843254 Event / Name : textChange'() {
    this.currentPage.setTextToTextField('textChange text').assert.containsText('@eventOutput', 'textChange');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
