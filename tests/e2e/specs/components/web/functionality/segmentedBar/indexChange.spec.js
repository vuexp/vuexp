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
  'C13843435 Props:/Name: selectedIndex, Type: Number'() {
    this.currentPage.assert
      .containsText('@selectedIndex_label', '0')
      .selectAnIndex(1)
      .assert.containsText('@selectedIndex_label', '1')
      .selectAnIndex(2)
      .assert.containsText('@selectedIndex_label', '2')
      .selectAnIndex(0)
      .assert.containsText('@selectedIndex_label', '0')
      .addItem('new added item')
      .assert.containsText('@segmen3_button_title', 'new added item')
      .selectAnIndex(3)
      .assert.containsText('@selectedIndex_label', '3')
      .selectAnIndex(1)
      .assert.containsText('@selectedIndex_label', '1');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
