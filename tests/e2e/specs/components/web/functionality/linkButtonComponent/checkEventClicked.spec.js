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
  'C13943391 - Probs:/ Event : Clicked'() {
    this.currentPage
      .checkInitialElements()
      .clickLinkWithoutUrlLabel()
      .assert.containsText('@eventSpan', 'event: click');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
