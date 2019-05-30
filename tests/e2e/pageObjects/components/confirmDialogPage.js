const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    confirm_button: '#confirm_dialog_container',
    confirm_label: '#label_result_text',
    ok_confirm: '.vxp-button.vxp-confirm-dialog__footer__ok-button.OK',
    cancel_confirm: '.vxp-button.vxp-confirm-dialog__footer__cancel-button.Cancel',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@confirm_button').to.be.visible;
        this.expect.element('@confirm_label').to.be.visible;
        return this;
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
