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
  'C13872376  Props:/Name: reversed, Type: Boolean'() {
    this.currentPage
      .addItemToList('Gokce')
      .assert.elementPresent('@itemfirst')
      .addItemToListTwo('Gokce2')
      .reverseList()
      .assert.elementPresent('@reverseElementList');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
