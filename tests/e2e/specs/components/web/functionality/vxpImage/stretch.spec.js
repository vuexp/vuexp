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
  'C13843463 Props/ Name: stretch, Value: none(default)'() {
    this.currentPage.checkInitialElements().assert.attributeContains('@image', 'class', 'vxp-img');
  },
  'C13843464 Props/ Name: stretch, Value: aspectFill'() {
    this.currentPage.strech_mode('aspectFill').assert.attributeContains('@image', 'class', 'vxp-img--aspect-fill');
  },
  'C13843465 Props/ Name: stretch, Value: aspectFit'() {
    this.currentPage.strech_mode('aspectFit').assert.attributeContains('@image', 'class', 'vxp-img--aspect-fit');
  },
  'C13843466 Props/ Name: stretch, Value: fill'() {
    this.currentPage
      .strech_mode('fill')
      .assert.attributeContains('@image', 'class', 'vxp-img--fill')
      .strech_mode('none')
      .assert.attributeContains('@image', 'class', 'vxp-img');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
