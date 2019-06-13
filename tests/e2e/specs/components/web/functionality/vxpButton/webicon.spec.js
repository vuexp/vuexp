module.exports = {
  tags: ['component', 'vxpButton'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpButtonPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-button.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'Props/Names:webicon,webicon position ,Web icon position Value : left/right'() {
    this.currentPage
      .selectIcon('smile')
      .assert.attributeContains('@buttonComponent', 'class', 'smile')
      .selectPosition('left')
      .assert.attributeContains('@buttonComponent', 'class', 'small');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
