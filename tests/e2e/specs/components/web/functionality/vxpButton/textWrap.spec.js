module.exports = {
  tags: ['component', 'vxpButton'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpButtonPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-button.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },

  ' Props/Name:textWrap, Value: Default (False), Events/tap'() {
    this.currentPage
      .setTextToButton(
        'All I want is a proper cup of coffee,' +
          'Made in a proper copper coffee pot' +
          'I may be off my dot' +
          'But I want a cup of coffee' +
          'From a proper coffee pot.',
      )
      //.setButtonWidth(300)
      //.setButtonHeight(120)
      .uncheckTextWrapSelectBox()
      .checkScreenshot('@buttonComponent')
      .click('@buttonComponent')
      .assert.containsText('@buttonActionLabel', 'Button Pressed');
  },

  ' Props/Name:textWrap, Value: True, Events/tap'() {
    this.currentPage
      .setTextToButton(
        'All I want is a proper cup of coffee,' +
          'Made in a proper copper coffee pot' +
          'I may be off my dot' +
          'But I want a cup of coffee' +
          'From a proper coffee pot.',
      )
      //.setButtonWidth(300)
      //.setButtonHeight(120)
      .checkTextWrapSelectBox()
      .checkScreenshot('@buttonComponent')
      .click('@buttonComponent')
      .assert.containsText('@buttonActionLabel', 'Button Pressed');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
