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
  'C13890285 Props : /Name : icon , type : String'() {
    this.currentPage.assert.containsText('@selected_icon', 'triangle').selectIcon('smile');
    this.client.pause(1000);
    this.currentPage.assert.containsText('@selected_icon', 'smile').selectIcon('circle');
    this.client.pause(1000);
    this.currentPage.assert.containsText('@selected_icon', 'circle').selectIcon('triangle');
    this.client.pause(1000);
    this.currentPage.assert.containsText('@selected_icon', 'triangle');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};