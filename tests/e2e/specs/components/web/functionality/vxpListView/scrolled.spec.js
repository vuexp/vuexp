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
  'C13890567  Events / Name : scrolled and Events / Name : loadMoreItems'() {
    this.currentPage.addScroll('Item Text2');
    this.client.execute(document.getElementById('#vxplistview_component_listview > div > div:nth-child(5) > div > span').scrollIntoView());
    this.currentPage.assert.containsText('@loadMoreItemsLabel', 'Load more items');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
