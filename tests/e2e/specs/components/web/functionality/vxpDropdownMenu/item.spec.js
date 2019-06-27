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
      .checkInitialElements()
      .openDropdownMenu()
      .assert.containsText('@item1_title', 'Delete Selected Lead(s)')
      .assert.attributeContains('@item1_icon', 'class', 'trash')
      .assert.containsText('@item2_title', 'Clone Selected Lead(s)')
      .assert.attributeContains('@item2_icon', 'class', 'plus-circle')
      .assert.containsText('@item3_title', 'Schedule Appointment')
      .assert.attributeContains('@item3_icon', 'class', 'calendar')
      .changeItemTitle(1, 'new title for 1')
      .assert.containsText('@item1_title', 'new title for 1')
      .changeItemTitle(2, 'new title for 2')
      .assert.containsText('@item1_title', 'new title for 1')
      .changeItemTitle(3, 'new title for 3')
      .assert.containsText('@item1_title', 'new title for 1');
    //.changeMenuIcon('trash')
    //.assert.attributeContains('@menu_icon', 'class', 'trash');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
