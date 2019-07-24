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
  'C13890281 Probs:/ Name: Width'() {
    this.currentPage
      .setWidth(300)
      .assert.attributeContains('@image', 'width', '300')
      .setWidth(150)
      .assert.attributeContains('@image', 'width', '150')
      .setWidth(50)
      .assert.attributeContains('@image', 'width', '50')
      .setWidth(275)
      .assert.attributeContains('@image', 'width', '275')
      .setWidth(400)
      .assert.attributeContains('@image', 'width', '400');
  },
  'C13890282 Probs:/ Name: Height'() {
    this.currentPage
      .setHeight(300)
      .assert.attributeContains('@image', 'height', '300')
      .setHeight(150)
      .assert.attributeContains('@image', 'height', '150')
      .setHeight(50)
      .assert.attributeContains('@image', 'height', '50')
      .setHeight(275)
      .assert.attributeContains('@image', 'height', '275')
      .setHeight(400)
      .assert.attributeContains('@image', 'height', '400');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
