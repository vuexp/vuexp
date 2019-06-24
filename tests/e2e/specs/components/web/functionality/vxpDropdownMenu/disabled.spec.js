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
  ' Props:/Name: disabled, Type: Boolean, Value : false (default)'() {
    this.currentPage.assert;
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
