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
  'C13890571    Methods/ Name :scrollToIndex(index)'() {
    this.currentPage
      .editListHeight('100')
      .addScroll('Item')
      .clickScrollToEnd();
    this.client.pause('2000');
    this.currentPage.assert.elementPresent('@scrollToIndex').assert.containsText('@loadMoreItemsLabel', 'Load more items');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
