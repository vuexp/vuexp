module.exports = {
  tags: ['component', 'vxpListView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpDropdownPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-dropDown.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13890219  Props:/Name: errors, Type: Array'() {
    this.currentPage
      .editError('new error')
      .assert.elementPresent('@errorLabelFirst')
      .assert.containsText('@errorLabelFirst', 'new error')
      .addErrors('editError')
      .assert.elementPresent('@errorLabelSecond')
      .assert.containsText('@errorLabelSecond', 'editError');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
