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
  'Props:/Name: minValue, Type: Number'() {
    this.currentPage.assert
      .attributeContains('@minValue', 'value', 0)
      .setNumberToMinValueInput(30)
      .setNumberToValueInput(20)
      .assert.containsText('@label', '20')
      .checkScreenshot('@slider_scroll')
      .assert.attributeContains('@slider_scroll', 'min', 30)
      .assert.attributeContains('@slider_scroll', 'max', 100)
      .setNumberToValueInput(30)
      .assert.containsText('@label', '30')
      .checkScreenshot('@slider_scroll');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
