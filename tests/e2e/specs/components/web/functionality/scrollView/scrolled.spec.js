const { elements } = require('../../../../../pageObjects/components/scrollViewPage');

module.exports = {
  tags: ['component', 'scrollView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.scrollViewPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/scrollview.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13855948 Event/Name:scroll'() {
    this.client.execute(
      "document.getElementById('" +
        elements.scrollViewComponent.substring(1) +
        "').scrollTop = document.getElementById('" +
        elements.scrollViewComponent.substring(1) +
        "').scrollHeight - document.getElementById('" +
        elements.scrollViewComponent.substring(1) +
        "').clientHeight",
    );
    this.currentPage.waitForElementVisible('@scrolledTextField', 10000).assert.containsText('@scrolledTextField', 'scrolled');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
