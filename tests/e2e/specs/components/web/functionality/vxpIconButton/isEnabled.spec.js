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
  'C13890288 Props : /Name : isEnabled, type : Boolean'() {
    this.currentPage.assert
      .containsText('@isEnable_label', 'true')
      .isEnable()
      .assert.containsText('@isEnable_label', 'false')
      .isEnable()
      .assert.containsText('@isEnable_label', 'true');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
