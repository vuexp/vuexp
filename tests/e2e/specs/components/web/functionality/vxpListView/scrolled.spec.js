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
    this.currentPage
      .editListHeight('100')
      .addScroll('Item Text2')
      .checkScrollEvent();
    this.client.execute("document.querySelector('#vxplistview_component_listview').scrollTop=100");
    this.client.pause('4000');
    this.currentPage.assert.containsText('#vxplistview_event1_label', 'Load more items');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
