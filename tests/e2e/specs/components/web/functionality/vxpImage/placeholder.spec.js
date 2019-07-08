module.exports = {
  tags: ['component', 'vxpImage'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpImagePage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-image.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13890280 Probs:/ Name: Placeholder'() {
    this.currentPage.setPlaceholder('placeholder value').assert.attributeContains('@image', 'alt', 'placeholder value');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
