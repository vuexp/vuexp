module.exports = {
  tags: ['component', 'slider'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.sliderPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/slider.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'Events / Name : valueChange'() {
    this.currentPage.assert.assert
      .attributeContains('@minValue', 0)
      .setNumberToMinValueInput(15)
      .sliderChange()
      .checkScreenshot('@slider_scroll')
      .assert.containsText('@label', '15');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
