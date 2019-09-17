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

  'C13976707 Check Accordion Modules each item have a content area.'() {
    this.currentPage
      .checkInitialElements()
      .clickItem(2)
      .expect.element('@item2_contentArea').to.be.present;
    this.currentPage.clickItem(3).expect.element('@item3_contentArea').to.be.present;
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
