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
  'Probs: /Name : item(image&icon)'() {
    this.currentPage
      .addNewItem('@input4_title', '@input4_icon', 'new item added', 'fa-share')
      .openDropdownMenu()
      .assert.attributeContains('@added_item_icon', 'class', 'fa-share');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
