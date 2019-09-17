module.exports = {
  tags: ['component', 'segmentedBar'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.segmentedBarPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/segmented-bar.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843432 Props:/Name: items, Type: Array<SegmentedBarItem>'() {
    this.currentPage
      .addItem('new added item')
      .assert.containsText('@segmen3_button_title', 'new added item')
      .deleteItem()
      .expect.element('@segment3').to.not.be.present;
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
