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
  'C13843246 Props /Name:text, type : String'() {
    this.currentPage.setTextToText('textview--').assert.attributeContains('@textview', 'value', 'textview--');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
