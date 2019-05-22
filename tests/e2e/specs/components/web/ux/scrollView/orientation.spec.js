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
  'C13839666 Props /Name:orientation, Value: Default (vertical)'() {
    this.currentPage.assert
      .attributeContains('@scrollViewComponent', 'class', 'scroll-view__vertical vxp-scrollview vxp-scrollview--vertical')
      .checkScreenshot('@scrollViewComponent');
  },

  'C13839667 Props /Name:orientation, Value: Horizontal'() {
    this.currentPage
      .checkHorizontalScrollSelectBox()
      .assert.attributeContains('@scrollViewComponent', 'class', 'scroll-view__vertical vxp-scrollview vxp-scrollview--horizontal')
      .checkScreenshot('@scrollViewComponent');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
