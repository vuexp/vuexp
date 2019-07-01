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
  'C13886859  Methods / Name :scrollToStart and Name :scrollToEnd'() {
    this.currentPage
      .editListHeight('100')
      .addScroll('Item')
      .clickScrollToEnd()
      .checkEventLabelElements()
      .assert.elementPresent('@componentEventLabel')
      .assert.containsText('@componentEventLabel', 'Load more items')
      .clickScrollToStart()
      .checkEventLabelElements()
      .assert.elementPresent('@scrollEventLabel')
      .assert.containsText('@scrollEventLabel', 'List view is scrolled');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
