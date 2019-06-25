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
  'C13943408 - Probs:/ Event : Name disable - Type boolean'() {
    this.currentPage
      .checkInitialElements()
      .clickDisableClickingCheckbox()
      .expect.element('@linkLabel')
      .to.not.have.attribute('href');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
