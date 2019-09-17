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
  'C13872378  Props /Name: items, type : Array'() {
    this.currentPage
      .addItemToList('Gokce')
      .assert.elementPresent('@itemfirst')
      .assert.elementPresent('@itemlast')
      .assert.containsText('@itemfirst', 'Gokce');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
