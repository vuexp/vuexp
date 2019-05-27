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
  'C13843436 Props:/Name: value , Type: Number'() {
    this.currentPage
      .setNumberToMinValueInput(15)
      .setNumberToValueInput(15)
      .checkScreenshot('@slider_scroll')
      .assert.containsText('@label', '15')
      .setNumberToValueInput(100)
      .checkScreenshot('@slider_scroll')
      .assert.containsText('@label', '100')
      .setNumberToValueInput(50)
      .checkScreenshot('@slider_scroll')
      .assert.containsText('@label', '50');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
