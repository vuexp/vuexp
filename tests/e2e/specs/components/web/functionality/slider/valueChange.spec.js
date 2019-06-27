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
  'C13843439 Events / Name : valueChange'() {
    this.currentPage
      .setNumberToValueInput(10)
      .checkScreenshot('@slider_scroll')
      .assert.containsText('@label', '10')
      .setNumberToValueInput(5)
      .checkScreenshot('@slider_scroll')
      .assert.containsText('@label', '5')
      .setNumberToValueInput(80)
      .checkScreenshot('@slider_scroll')
      .assert.containsText('@label', '80');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
