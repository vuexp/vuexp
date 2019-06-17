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
    this.currentPage
      .checkInitialElements()
      .assert.containsText('@selected_icon', 'triangle')
      .selectIconSmile()
      .containsText('@selected_icon', 'smile')
      .selectIconUser()
      .assert.containsText('@selected_icon', 'user')
      .selectIconTri()
      .assert.containsText('@selected_icon', 'triangle')
      .selectIconUser()
      .assert.containsText('@selected_icon', 'user');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
