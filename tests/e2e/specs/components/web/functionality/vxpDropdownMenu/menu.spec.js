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
  'C13962312 Probs: /Name : item(image&icon)'() {
    this.currentPage
      .checkInitialElements()
      .assert.containsText('@menu_title', 'Dropdown')
      .assert.attributeContains('@menu_icon', 'class', 'fa-pencil')
      .changeMenuTitle('new dropdown name')
      .assert.containsText('@menu_title', 'new dropdown name')
      .changeMenuIcon('trash')
      .assert.attributeContains('@menu_icon', 'class', 'trash')
      .changeMenuIcon('plus_circle')
      .assert.attributeContains('@menu_icon', 'class', 'plus-circle')
      .changeMenuIcon('share')
      .assert.attributeContains('@menu_icon', 'class', 'share')
      .changeMenuIcon('times')
      .assert.attributeContains('@menu_icon', 'class', 'times')
      .changeMenuIcon('refresh')
      .assert.attributeContains('@menu_icon', 'class', 'refresh')
      .changeMenuIcon('smile')
      .assert.attributeContains('@menu_icon', 'class', 'smile')
      .changeMenuIcon('user_circle')
      .assert.attributeContains('@menu_icon', 'class', 'user-circle')
      .changeMenuIcon('triangle')
      .assert.attributeContains('@menu_icon', 'class', 'triangle');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
