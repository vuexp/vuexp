module.exports = {
  tags: ['component', 'linkButton'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.linkButtonPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-link.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13890237 - Probs:/ Name : Text'() {
    const changedText = 'Testing link text by automated case';

    this.currentPage
      .checkInitialElements()
      .setLinkText(changedText)
      .assert.containsText('@linkLabel', changedText);
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
