const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    dropdownComponent: 'input[class="vxp-drop-down__container__toggle typ-body"]',
    //errors elements
    errorFieldFirst: '#dropDown_errors_textField_0',
    errorFieldSecond: '#dropDown_errors_textField_1',
    errorFieldThird: '#dropDown_errors_textField_2',
    errorPlusButton: '#dropDown_errors_plus_button',
    errorMinusButton: '#dropDown_errors_minus_button',
    errorLabelFirst: '#dropDown_docs > div.vxp-flexbox-layout.vxp-drop-down__container__toggle__error-messages.typ-body > span:nth-child(1)',
    errorLabelSecond: '#dropDown_docs > div.vxp-flexbox-layout.vxp-drop-down__container__toggle__error-messages.typ-body > span:nth-child(2)',
    errorLabelThird: '#dropDown_docs > div.vxp-flexbox-layout.vxp-drop-down__container__toggle__error-messages.typ-body > span:nth-child(3)',

    //disabled elements
    disabledCheckbox: '#dropDown_disabled_checkbox',
    disabledLabel: '#dropDown_checkbox_value_label',

    //items elements
    itemsPlusButton: '#dropDown_items_plus_button',
    itemsMinusButton: '#dropDown_items_minus_button',
    itemsLabelField: '#dropDown_items_label_textField',
    selectIndexField: '#dropDown_items_index_textField',
    firstItemTextField: '#dropDown_items_textField_0',
    secondItemTextField: '#dropDown_items_textField_1',
    addedItemField: '#dropDown_items_textField_9',
    addedItemFieldTwo: '#dropDown_items_textField_10',
    dropdownItemLabelFirst: '#dropDown_docs > ul > li:nth-child(1)',
    dropdownItemLabelSecond: '#dropDown_docs > ul > li:nth-child(2)',
    dropdownaddedItemFirst: '#dropDown_docs > ul > li.hover',
    dropdownaddedItemSecond: '//*[@id="dropDown_docs"]/ul/li[11]',
    selectIndexLabel: '#dropDown_selectItem_label',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@checkbox').to.be.visible;
        return this;
      },
      editError: function(errorName) {
        return this.waitForElementVisible('@errorFieldFirst', 10000)
          .clearValue('@errorFieldFirst')
          .setValue('@errorFieldFirst', errorName);
      },
      addErrors: function(errorName2) {
        return this.waitForElementVisible('@errorFieldFirst', 10000)
          .click('@errorPlusButton')
          .waitForElementVisible('@errorFieldSecond', 10000)
          .clearValue('@errorFieldSecond')
          .setValue('@errorFieldSecond', errorName2)
          .click('@errorPlusButton');
      },
      editItem: function(ItemName) {
        return this.waitForElementVisible('@firstItemTextField', 10000)
          .clearValue('@firstItemTextField')
          .setValue('@firstItemTextField', ItemName)
          .setValue('@secondItemTextField', ItemName)
          .click('@dropdownComponent')
          .waitForElementVisible('@dropdownItemLabelFirst', 10000);
        //.click('@errorFieldFirst')
      },
      closeDropdown: function() {
        return this.waitForElementVisible('@dropdownComponent', 10000).click('@errorFieldFirst');
      },
      selectIndex: function(index) {
        return this.waitForElementVisible('@selectIndexField', 10000).setValue('@selectIndexField', index);
      },
      addFirstItem: function(ItemName2) {
        return this.waitForElementVisible('@itemsPlusButton', 10000)
          .click('@itemsPlusButton')
          .waitForElementVisible('@itemsPlusButton', 10000)
          .waitForElementVisible('@addedItemField', 10000)
          .clearValue('@addedItemField')
          .setValue('@addedItemField', ItemName2);
      },
      addSecondItem: function(ItemName3) {
        return this.waitForElementVisible('@itemsPlusButton', 10000)
          .click('@itemsPlusButton')
          .waitForElementVisible('@addedItemFieldTwo', 10000)
          .clearValue('@addedItemFieldTwo')
          .setValue('@addedItemFieldTwo', ItemName3);
      },
      deleteItem: function() {
        return this.waitForElementVisible('@itemsMinusButton', 10000)
          .click('@itemsMinusButton')
          .click('@dropdownComponent');
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
