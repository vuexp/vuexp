const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    showModalBaseButton: '#modalbase_component',
    fullScreenCheckbox: '#checkbox_fullscreen',
    modalDialogArea: 'div.vxp-modal > div',
    modalLabel: '#label_modaldialog',
    modalVxpButton: '#button_modaldialog',
    modalCheckbox: '#checkbox_modaldialog_checkbox > div',
    modalButtonResultSpan: '#button_modaldialog_result',
    modalCheckboxResultSpan: '#checkbox_modaldialog_result',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        return this.waitForElementVisible('@showModalBaseButton', 3000).waitForElementVisible('@fullScreenCheckbox', 3000);
      },

      checkModalDialogElements: function() {
        return this.waitForElementVisible('@modalDialogArea', 3000)
          .waitForElementVisible('@modalLabel', 3000)
          .waitForElementVisible('@modalVxpButton', 3000)
          .waitForElementVisible('@modalCheckbox', 3000)
          .waitForElementVisible('@modalCheckboxResultSpan', 3000);
      },

      clickShowModalButton: function() {
        return this.click('@showModalBaseButton');
      },

      clickFullScreenSelectbox: function() {
        return this.click('@fullScreenCheckbox');
      },

      clickModalVxpButton: function() {
        return this.click('@modalVxpButton');
      },

      checkModalButtonResult: function() {
        return this.waitForElementVisible('@modalButtonResultSpan', 3000);
      },

      clickModalCheckbox: function() {
        return this.click('@modalCheckbox');
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
