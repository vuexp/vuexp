module.exports = {
  tags: ['component', 'segmentedBar'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.segmentedBarPage();
    this.currentPage
      .navigate('http://localhost:8080/components/segmented-bar.html')
      .waitForElementVisible('body', 100000)
      .customPerform(function() {
        done();
      });
  },
  'C13843432 Props:/Name: items, Type: Array<SegmentedBarItem>'() {
    this.currentPage
      .setItemsofSegmentedBar('Gokce')
      .selectBackgroundColor('#00ff00')
      .addItemtoSegmentedBar()
      .assert.elementPresent('@addedSegmentedBarItem')
      .deleteItemFromSegmentedBar();
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
