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
  'C13843433 Props:/Name: selectedIndex, Type: Number'() {
    this.currentPage.changeSelectedIndex().assert.elementPresent('@activeSegmentedBarItem');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
