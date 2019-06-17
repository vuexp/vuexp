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
  'C13890289 Event: Name : tap'() {
    this.currentPage
      .checkInitialElements()
      .assert.containsText('@clikCount_label', '0')
      .clickIconButton('primary')
      .assert.containsText('@clikCount_label', '1')
      .clickIconButton('secondary')
      .assert.containsText('@clikCount_label', '2')
      .clickIconButton('primary')
      .assert.containsText('@clikCount_label', '3')
      .clickIconButton('alert')
      .assert.containsText('@clikCount_label', '4')
      .clickIconButton('secondary')
      .assert.containsText('@clikCount_label', '5');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
