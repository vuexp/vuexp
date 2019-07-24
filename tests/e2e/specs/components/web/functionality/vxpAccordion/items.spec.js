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
  'C13976712 Events: collapsed(itemIndex)'() {
    this.currentPage
      .clickItem(3)
      .assert.containsText('@collapsed_label', '3')
      .clickItem(2)
      .assert.containsText('@collapsed_label', '2');
  },
  'C13976711 Events: expanded(itemIndex)'() {
    this.currentPage
      .clickItem(3)
      .assert.containsText('@expanded_label', '3')
      .clickItem(2)
      .assert.containsText('@expanded_label', '2');
  },
  'C13976709 Probs: items'() {
    this.currentPage
      .checkInitialElements()
      .addItem('1 added title by irem ')
      .clickItem(4)
      .assert.containsText('@expanded_label', '4')
      .clickItem(4)
      .assert.containsText('@collapsed_label', '4')
      .addItem('2 added title by irem ')
      .clickItem(5)
      .assert.containsText('@expanded_label', '5')
      .clickItem(5)
      .assert.containsText('@collapsed_label', '5');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
