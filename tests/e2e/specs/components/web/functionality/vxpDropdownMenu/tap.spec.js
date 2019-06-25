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
  'Events: tap'() {
    this.currentPage
      .checkInitialElements()
      .openDropdownMenu()
      //  .addNewItem('@input4_title', '@input4_icon', 'new item added', 'fa-share')
      .selectAnItem('0');
    this.client.pause('10000');
    this.currentPage.assert.containsText('@selected_index', '0').selectAnItem('1');
    this.client.pause('10000');
    this.currentPage.assert.containsText('@selected_index', '1').selectAnItem('2');
    this.client.pause('10000');
    this.currentPage.assert.containsText('@selected_index', '2');
    // this.currentPage.assert.containsText('@selected_index', '3');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
