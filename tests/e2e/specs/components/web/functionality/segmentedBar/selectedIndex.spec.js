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
  'C13843433 Props:/Name: selectedIndex, Type: Number'() {
    this.currentPage
      .changeItemTitle(0)
      .assert.containsText('@segmen0_button_title', 'change 0')
      .changeItemTitle(1)
      .assert.containsText('@segmen1_button_title', 'change 1')
      .changeItemTitle(2)
      .assert.containsText('@segmen2_button_title', 'change 2')
      .addItem('new added item')
      .assert.containsText('@segmen3_button_title', 'new added item')
      .selectAnIndex(3)
      .assert.containsText('@selectedIndex_label', '3')
      .changeItemTitle(3)
      .assert.containsText('@segmen3_button_title', 'change 3');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
