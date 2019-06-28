module.exports = {
  tags: ['component', 'vxpListView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpListViewPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-list-view.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13890569  Events / Name : listViewLoaded'() {
    this.currentPage.assert.containsText('@listViewLoadedLabel', 'List view is loaded.');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
