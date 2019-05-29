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
  'C13843253 Props /Name: autocorrect, type : Boolean'() {
    this.currentPage
      .setTextToTextField('hllbbbbbbbbbbo ')
      .checkScreenshot('@textview')
      .click('@autoCorrectCheck')
      .waitForElementVisible('@textview', 1000)
      .click('@textview')
      .checkScreenshot('@textview');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
