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
  'C13886857  Events / Name : Tap'() {
    this.currentPage
      .editListHeight('300')
      .addItemToList('Gokce')
      .assert.containsText('@itemTapLabelFirst', 'Item is tapped, index: 0')
      .assert.containsText('@itemTapLabelSecond', 'Item is tapped, index: 1')
      .assert.attributeContains('@list', 'height', '300');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
