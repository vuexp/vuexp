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
  'C13890238 Props/Names:webicon,webicon position ,Web icon position Value : left/right'() {
    this.currentPage.assert
      .containsText('@icon_class', 'fa')
      .selectIcon('smile')
      .assert.containsText('@icon_label', 'smile')
      .selectPosition('left')
      .assert.containsText('@iconPos_label', 'left')
      .selectIcon('user')
      .assert.containsText('@icon_label', 'user')
      .selectPosition('right')
      .assert.containsText('@iconPos_label', 'right')
      .selectIcon('triangle')
      .assert.containsText('@icon_label', 'triangle')
      .selectPosition('left')
      .assert.containsText('@iconPos_label', 'left');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
