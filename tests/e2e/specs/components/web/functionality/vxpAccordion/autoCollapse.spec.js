module.exports = {
  tags: ['component', 'vxpAccordion'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpAccordionPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-accordion.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13976710 Probs: autoCollapse'() {
    this.currentPage
      .checkInitialElements()
      .assert.containsText('@autoCollapse_label', 'false')
      .assert.containsText('@initial_expanded_items', '2,3')
      .check_Autocollapse()
      .assert.containsText('@autoCollapse_label', 'true')
      .clickItem(2)
      .assert.containsText('@collapsed_label', '2')
      .clickItem(3)
      .assert.containsText('@expanded_label', '3')
      .clickItem(2)
      .assert.containsText('@collapsed_label', '3')
      .assert.containsText('@expanded_label', '2')
      .check_Autocollapse()
      .assert.containsText('@autoCollapse_label', 'false')
      .clickItem(3)
      .assert.containsText('@collapsed_label', '3')
      .assert.containsText('@expanded_label', '3');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
