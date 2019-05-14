module.exports = {
  tags: ['component', 'frame'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.framePage();
    this.currentPage
      .navigate('http://localhost:8080/components/frame.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843460 Check frame label'() {
    this.currentPage.assert.containsText('@frame_label', 'FRAME');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
