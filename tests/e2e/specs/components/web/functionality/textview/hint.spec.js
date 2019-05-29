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
  'C13843247 Props /Name:hint, type : string'() {
    this.currentPage.setTextToHint('textfield-hint-test').assert.attributeContains('@textview', 'placeholder', 'textfield-hint-test');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
