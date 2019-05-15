module.exports = {
  tags: ['component', 'button'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.buttonPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/button.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },

  'C13843419 Props/Name:textWrap, Value: Default (False), Events/tap'() {
    this.currentPage
      .setTextToButton(
        'All I want is a proper cup of coffee,' +
          'Made in a proper copper coffee pot' +
          'I may be off my dot' +
          'But I want a cup of coffee' +
          'From a proper coffee pot.',
      )
      .setButtonWidth(300)
      .setButtonHeight(120)
      //.uncheckTextWrapSelectBox(300,120)
      .checkScreenshot('@buttonComponent')
      .click('@buttonComponent')
      .assert.containsText('@buttonActionLabel', 'Button Pressed');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
