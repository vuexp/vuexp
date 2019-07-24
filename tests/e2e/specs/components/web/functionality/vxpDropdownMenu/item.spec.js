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
  'C13899148 Probs: /Name : item(image&icon)'() {
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
      .assert.containsText('@item1_title', 'new title for 1')
      .changeItemIcon(1)
      .assert.attributeContains('@item1_icon', 'class', 'times')
      .addNewItem()
      .assert.containsText('@item4_title', 'Sample title')
      .assert.attributeContains('@item4_icon', 'class', 'smile')
      .changeItemTitle(4, 'new title for 4')
      .assert.containsText('@item4_title', 'new title for 4')
      .changeItemIcon(4)
      .assert.attributeContains('@item4_icon', 'class', 'share')
      .resetItems()
      .expect.element('@item4_title').to.not.be.present;
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
