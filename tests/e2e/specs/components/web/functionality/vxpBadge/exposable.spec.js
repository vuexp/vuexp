module.exports = {
  tags: ['component', 'vxpBadge'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpBadgePage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-badge.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13976152 Check that Badge component should be exposable as component '() {
    this.currentPage
      .checkInitialElements()
      .assert.containsText('@vxpBadge', '1')
      .setBadgeCount(10)
      .assert.containsText('@vxpBadge', '10')
      .setBadgeCount(50)
      .assert.containsText('@vxpBadge', '50')
      .setBadgeCount(99)
      .assert.containsText('@vxpBadge', '99')
      .setBadgeCount(100)
      .assert.containsText('@vxpBadge', '99+')
      .setBadgeCount(178)
      .assert.containsText('@vxpBadge', '99+')
      .setWidth(18)
      .assert.attributeContains('@vxpBadge', 'width', '18')
      .setWidth(100)
      .assert.attributeContains('@vxpBadge', 'width', '100')
      .setWidth(150)
      .assert.attributeContains('@vxpBadge', 'width', '150')
      .setHeight(18)
      .assert.attributeContains('@vxpBadge', 'height', '18')
      .setHeight(100)
      .assert.attributeContains('@vxpBadge', 'height', '100')
      .setHeight(150)
      .assert.attributeContains('@vxpBadge', 'height', '150')
      .selectTheme('primary')
      .assert.attributeContains('@vxpBadge', 'primary', 'true')
      .selectTheme('secondary')
      .assert.attributeContains('@vxpBadge', 'secondary', 'true')
      .selectTheme('alert')
      .assert.attributeContains('@vxpBadge', 'alert', 'true');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
