module.exports = {
  tags: ['component', 'vxpSideMenu'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpSideDrawerPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-side-drawer.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13890566 Event : Tap to Close SideDrawer Component'() {
    this.currentPage
      .checkInitialElements()
      .assert.containsText('@event_label', 'false')
      .openSideMenu()
      .assert.containsText('@event_label', 'true')
      .closeSideMenu()
      .assert.containsText('@event_label', 'false');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
