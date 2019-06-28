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
  'C13890572  Methods / Name :showStatusIndicator(showIndicator, item)'() {
    this.currentPage
      .showIndicator()
      .assert.elementPresent('@loadingText')
      .hideIndicator()
      .assert.elementNotPresent('@loadingText')
      .changeIndicatorState()
      .assert.attributeContains('@loadingText', 'style', 'white-space: nowrap; color: red;');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
