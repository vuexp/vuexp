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
  'C13890565 Event : Tap to Open SideDrawer Component'() {
    this.currentPage
      .checkInitialElements()
      .openSideMenu()
      .assert.containsText('@event_label', 'true');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
