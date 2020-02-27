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

  'C13899151 Events: tap'() {
    this.currentPage
      .addNewItem()
      .openDropdownMenu()
      .assert.containsText('@item4_title', 'Sample title')
      .assert.attributeContains('@item4_icon', 'class', 'smile')
      .selectAnItem(0)
      .assert.containsText('@selected_index', '0')
      //.selectAnItem(1);
      // this.currentPage.assert.containsText('@selected_index', '1')
      .selectAnItem(2)
      .assert.containsText('@selected_index', '2')
      .selectAnItem(3)
      .assert.containsText('@selected_index', '3');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
