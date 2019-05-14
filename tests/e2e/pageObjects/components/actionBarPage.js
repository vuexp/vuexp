const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    titleInputField: '#actionbar__title__input',
    titleLabelField: 'span[class="vxp-action-bar__title"]',
    shareIconSelectBox: '#actionbar__shareicon__select',
    shareIconSelectBoxOption: 'option[value="fa-share-alt"]',
    deleteIconSelectBox: '#actionbar__deleteicon__select',
    deleteIconSelectBoxOption: 'option[value="fa-window-close"]',
    actionBarShareIcon: '.vxp-action-item__icon.fa-share-alt',
    actionBarDeleteIcon: '.vxp-action-item__icon.fa-window-close',
    actionItemButton: 'button[class="vxp-button ➕ Add Action Item"]',
    navigationButton: 'button[class="vxp-button ➕ Add Navigation Button"]',
    actionItem1: '#actionbar__deleteicon__select__0',
    actionItem2: '#actionbar__deleteicon__select__1',
    actionItem3: '#actionbar__deleteicon__select__2',
    actionItem4: '#actionbar__deleteicon__select__3',
    deleteIconSelectBoxOption1: '#actionbar__deleteicon__select__0 > option:nth-child(2)',
    deleteIconSelectBoxOption2: '#actionbar__deleteicon__select__1 > option:nth-child(3)',
    deleteIconSelectBoxOption3: '#actionbar__deleteicon__select__2 > option:nth-child(2)',
    deleteIconSelectBoxOption4: '#actionbar__deleteicon__select__3 > option:nth-child(3)',
    //deleteActionItemIcon: '.vxp-action-item__icon.fa-window-close-o',
    deleteActionItemIcon: '.result-container.vxp-stack-layout.vxp-stack-layout--vertical > div:nth-child(3) > div:nth-child(2) > span',
    addNavigationButton: 'button[class="vxp-button ➕ Add Navigation Button"]',
    navigationButtonIcon: '.vxp-action-item__icon.fa-angle-left',
    navigationButtonselectbox: '#actionbar__deleteicon__select__4',
    navigationButtonselectboxOption: '#actionbar__deleteicon__select__4 > option:nth-child(2)',
    deleteIconLabel: '#actionbar__deleteicon__label',
    actionBarTwo: '.result-container.vxp-stack-layout.vxp-stack-layout--vertical > div:nth-child(3)',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@titleInputField').to.be.visible;
        return this;
      },
      setTitletoInput: function(text) {
        return this.waitForElementVisible('@titleInputField', 10000)
          .clearValue('@titleInputField')
          .setValue('@titleInputField', text);
      },
      changeShareIconOption: function() {
        return this.click('@shareIconSelectBox')
          .waitForElementVisible('@shareIconSelectBoxOption', 10000)
          .click('@shareIconSelectBoxOption');
      },
      changeDeleteIconOption: function() {
        return this.click('@deleteIconSelectBox')
          .waitForElementVisible('@deleteIconSelectBoxOption', 10000)
          .click('@deleteIconSelectBoxOption');
      },
      clickShareButton: function() {
        return this.click('@actionBarShareIcon');
      },
      clickDeleteButton: function() {
        return this.click('@actionBarDeleteIcon');
      },
      selectActionItemIcons: function() {
        return this.click('@actionItemButton')
          .click('@actionItem1')
          .click('@deleteIconSelectBoxOption1')
          .click('@actionItem2')
          .click('@deleteIconSelectBoxOption2')
          .click('@actionItem3')
          .click('@deleteIconSelectBoxOption3')
          .click('@actionItem4')
          .click('@deleteIconSelectBoxOption4')
          .click('@deleteActionItemIcon');
      },
      addNavigationButton: function() {
        return this.click('@navigationButton')
          .click('@navigationButtonselectbox')
          .click('@navigationButtonselectboxOption');
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
