module.exports = {
  tags: ['component', 'label'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.labelPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/label.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843482 Props/Name:textWrap, Value:false (default)'() {
    this.currentPage
      .setTextToLabel(
        'There was a fisherman named Fisher ' +
          'who fished for some fish in a fissure. ' +
          'Till a fish with a grin, ' +
          'pulled the fisherman in. ' +
          'Now they are fishing the fissure for Fisher.',
      )
      //.uncheckTextWrapCheckbox()
      .checkScreenshot('@textOutputField');
  },

  'C13843483 Props/Name:textWrap, Value: True'() {
    this.currentPage
      .setTextToLabel(
        'There was a fisherman named Fisher ' +
          'who fished for some fish in a fissure. ' +
          'Till a fish with a grin, ' +
          'pulled the fisherman in. ' +
          'Now they are fishing the fissure for Fisher.',
      )
      .checkTextWrapCheckbox()
      .checkScreenshot('@textOutputField');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
