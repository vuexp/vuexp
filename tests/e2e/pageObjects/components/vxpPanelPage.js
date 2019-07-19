const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    vxpPanelArea: 'div.demo-panel > div.vxp-stack-layout.vxp-stack-layout--vertical',
    panelTitleSpan: 'div.vxp-grid-layout.vxp-panel__title > span',
    panelHeaderFirstButton: 'div.vxp-panel__title > div > div > button:nth-child(1)',
    panelHeaderSecondButton: 'div.vxp-panel__title > div > div > button:nth-child(2)',
    panelTitleInputField: '#vxpPanel__title__input > input',
    // First Panel Icon Selectbox's elements
    firstPanelIconSelectbox: '#vxpPanel__shareicon__select__0',
    firstPanelIconSelectboxFirstOption: '#vxpPanel__shareicon__select > option:nth-child(1)',
    firstPanelIconSelectboxSecondOption: '#vxpPanel__shareicon__select > option:nth-child(2)',
    firstPanelIconSelectboxThirdOption: '#vxpPanel__shareicon__select > option:nth-child(3)',
    firstAddPanelIconButton: '#add_panelicon_0',
    firstRemovePanelIconButton: '#remove_panelicon_0',
    // Second Panel Icon selectbox's elements
    secondPanelIconSelectbox: '#vxpPanel__shareicon__select__1',
    secondPanelIconSelectboxFirstOption: '#vxpPanel__shareicon__select__1 > option:nth-child(1)',
    secondPanelIconSelectboxSecondOption: '#vxpPanel__shareicon__select__1 > option:nth-child(2)',
    secondPanelIconSelectboxThirdOption: '#vxpPanel__shareicon__select__1 > option:nth-child(3)',
    secondAddPanelIconButton: '#add_panelicon_1',
    secondRemovePanelIconButton: '#remove_panelicon_1',
    // Alert Dialog CSS
    alertDialogContainer: 'div.vxp-modal-dialog.vxp-alert-dialog > div',
    alertDialogDescription: '#modalDescription > div > div',
    alertDialogOkButton: 'div.vxp-modal-dialog.vxp-alert-dialog > div > footer > div > button',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        return this.waitForElementVisible('@vxpPanelArea', 3000)
          .waitForElementVisible('@panelTitleSpan', 3000)
          .waitForElementVisible('@panelTitleInputField', 3000)
          .waitForElementVisible('@firstPanelIconSelectbox', 3000)
          .waitForElementVisible('@firstAddPanelIconButton', 3000)
          .waitForElementVisible('@firstRemovePanelIconButton', 3000);
      },
      setFirstPanelIconSelectboxOptions: function(option) {
        this.click('@firstPanelIconSelectbox')
          .waitForElementVisible('@firstPanelIconSelectboxFirstOption', 3000)
          .waitForElementVisible('@firstPanelIconSelectboxSecondOption', 3000)
          .waitForElementVisible('@firstPanelIconSelectboxThirdOption', 3000);

        switch (option) {
          case 'fa-share':
            this.click('@firstPanelIconSelectboxFirstOption');
            this.expect.element('@panelHeaderFirstButton').to.be.visible;
            break;

          case 'fa-share-alt':
            this.click('@firstPanelIconSelectboxSecondOption');
            this.expect.element('@panelHeaderFirstButton').to.be.visible;
            break;

          case 'fa-share-square-o':
            this.click('@firstPanelIconSelectboxThirdOption');
            this.expect.element('@panelHeaderFirstButton').to.be.visible;
            break;
        }
        return this;
      },
      setSecondPanelIconSelectboxOptions: function(option) {
        this.click('@secondPanelIconSelectbox')
          .waitForElementVisible('@secondPanelIconSelectbox', 3000)
          .waitForElementVisible('@secondPanelIconSelectboxFirstOption', 3000)
          .waitForElementVisible('@secondPanelIconSelectboxSecondOption', 3000)
          .waitForElementVisible('@secondPanelIconSelectboxThirdOption', 3000)
          .waitForElementVisible('@secondAddPanelIconButton', 3000)
          .waitForElementVisible('@secondRemovePanelIconButton', 3000);

        switch (option) {
          case 'fa-share':
            this.click('@secondPanelIconSelectboxFirstOption');
            this.expect.element('@panelHeaderSecondButton').to.be.visible;
            break;

          case 'fa-share-alt':
            this.click('@secondPanelIconSelectboxSecondOption');
            this.expect.element('@panelHeaderSecondButton').to.be.visible;
            break;

          case 'fa-share-square-o':
            this.click('@secondPanelIconSelectboxThirdOption');
            this.expect.element('@panelHeaderSecondButton').to.be.visible;
            break;
        }
        return this;
      },
      setPanelTitleInputField: function(text) {
        return this.clearValue('@panelTitleInputField').setValue('@panelTitleInputField', text);
      },
      clickFirstAddPanelIconButton: function() {
        return this.click('@firstAddPanelIconButton');
      },
      clickSecondAddPanelIconButton: function() {
        return this.click('@secondAddPanelIconButton');
      },
      checkAlertDialogElements: function() {
        return this.waitForElementVisible('@alertDialogContainer', 3000)
          .waitForElementVisible('@alertDialogDescription', 3000)
          .waitForElementVisible('@alertDialogOkButton', 3000);
      },
      clickAlertDialogOkButton: function() {
        return this.click('@alertDialogOkButton');
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
