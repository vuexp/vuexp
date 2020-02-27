module.exports = {
  tags: ['component', 'vxpDropdownMenu'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpDropdownMenuPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/menus/vxpdropdown-menu.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13899149 Probs: /Name : disabled'() {
    this.currentPage
      .checkInitialElements()
      .assert.containsText('@disable_label', 'false')
      .setDisabled()
      .assert.containsText('@disable_label', 'true')
      .setDisabled()
      .assert.containsText('@disable_label', 'false');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
