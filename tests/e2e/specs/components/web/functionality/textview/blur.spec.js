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
  'C13843257 Event / Name : blur'() {
    this.currentPage
      .checkInitialElements()
      .blur()
      .assert.containsText('@eventOutput', 'blur');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
