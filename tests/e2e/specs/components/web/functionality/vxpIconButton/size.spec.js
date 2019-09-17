module.exports = {
  tags: ['component', 'vxpIconButton'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpIconButtonPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxpiconbutton.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13890287 Props : /Name : size, type : String, Number , Default: 37'() {
    this.currentPage
      .checkInitialElements()
      .assert.containsText('@selected_primary_size', '37')
      .assert.containsText('@selected_secondary_size', '37')
      .assert.containsText('@selected_alert_size', '37')
      .selectSize('primary', 40)
      .assert.containsText('@selected_primary_size', '40')
      .selectSize('secondary', 30)
      .assert.containsText('@selected_secondary_size', '30')
      .selectSize('alert', 10)
      .assert.containsText('@selected_alert_size', '10')
      .selectSize('primary', 70)
      .assert.containsText('@selected_primary_size', '70')
      .selectSize('secondary', 15)
      .assert.containsText('@selected_secondary_size', '15')
      .selectSize('alert', 55)
      .assert.containsText('@selected_alert_size', '55');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
