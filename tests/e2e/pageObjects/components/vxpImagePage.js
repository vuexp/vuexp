const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    image: '#image',
    url: '#image__src__input',
    stretch_mode: '#image__stretchMode__select',
    placeholder: '#image__placeholder__input',
    width: '#image__width__input',
    height: '#image__height__input',
    event_label: '#image__event__label',
    //stretch modes
    none: '#image__stretchMode__select > option:nth-child(1)',
    aspectFill: '#image__stretchMode__select > option:nth-child(2)',
    aspectFit: '#image__stretchMode__select > option:nth-child(3)',
    fill: '#image__stretchMode__select > option:nth-child(4)',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@image').to.be.visible;
        this.expect.element('@url').to.be.visible;

        return this;
      },

      setPlaceholder: function(text) {
        return this.waitForElementVisible('@placeholder', 10000)
          .clearValue('@placeholder')
          .clearValue('@url')
          .setValue('@placeholder', text);
      },
      setWidth: function(size) {
        return this.waitForElementVisible('@width', 10000)
          .clearValue('@width')
          .setValue('@width', size);
      },
      setHeight: function(size) {
        return this.waitForElementVisible('@height', 10000)
          .clearValue('@height')
          .setValue('@height', size);
      },
      strech_mode: function(mode) {
        this.waitForElementVisible('@stretch_mode', 10000).click('@stretch_mode');
        switch (mode) {
          case 'none':
            return this.click('@none');
          case 'aspectFill':
            return this.click('@aspectFill');
          case 'aspectFit':
            return this.click('@aspectFit');
          case 'fill':
            return this.click('@fill');
        }
      },
      loadImage: function(source_url) {
        return this.waitForElementVisible('@url', 10000)
          .clearValue('@url')
          .setValue('@url', source_url);
      },
    },
  ],
};
