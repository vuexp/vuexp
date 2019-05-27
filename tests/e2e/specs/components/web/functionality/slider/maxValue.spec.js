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
  'C13843438 Props:/Name: maxValue, Type: Number'() {
    this.currentPage.assert
      .attributeContains('@maxValue', 'value', 100)
      .setNumberToMaxValueInput(15)
      .setNumberToValueInput(15)
      .checkScreenshot('@slider_scroll')
      .assert.attributeContains('@slider_scroll', 'min', 0)
      .assert.attributeContains('@slider_scroll', 'max', 15)
      .assert.containsText('@label', '15')
      .setNumberToValueInput(10)
      .checkScreenshot('@slider_scroll');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
