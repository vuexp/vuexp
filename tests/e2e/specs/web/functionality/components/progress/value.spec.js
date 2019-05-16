module.exports = {
  tags: ['component', 'progress'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.progressPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/progress.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'Check Current progress value'() {
    this.currentPage.assert
      .containsText('@prog_value', 'Current Progress: 0')
      .setTextToIncreamentInput(15)
      .click('@increament_button')
      .assert.containsText('@prog_value', 'Current Progress: 15')
      .setTextToIncreamentInput(25)
      .click('@increament_button')
      .assert.containsText('@prog_value', 'Current Progress: 40')
      .setTextToIncreamentInput(30)
      .click('@increament_button')
      .assert.containsText('@prog_value', 'Current Progress: 70')
      .setTextToIncreamentInput(35)
      .click('@decreament_button')
      .assert.containsText('@prog_value', 'Current Progress: 35')
      .click('@decreament_button')
      .assert.containsText('@prog_value', 'Current Progress: 0');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
