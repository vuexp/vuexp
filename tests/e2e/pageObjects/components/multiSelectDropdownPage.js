const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    // Vxp MultiSelectDropdown component and items' CSS selector
    selectItemsDropdown: '#vxpmultiselectdropdown input',
    selectItemsDropdownFirstPill: '#vxpmultiselectdropdown > div > div.vxp-wrap-layout > div:nth-child(1)',
    selectItemsDropdownSecondPill: '#vxpmultiselectdropdown > div > div.vxp-wrap-layout > div:nth-child(2)',
    selectItemsDropdownThirdPill: '#vxpmultiselectdropdown > div > div.vxp-wrap-layout > div:nth-child(3)',
    selectItemsDropdownEmptyOption: '#vxpmultiselectdropdown > div.vxp-multiselectdropdown__suggestions-box > div > span',
    selectItemsDropdownFirstOption: '#vxpmultiselectdropdown > div.vxp-multiselectdropdown__suggestions-box > div > div:nth-child(1)',
    selectItemsDropdownSecondOption: '#vxpmultiselectdropdown > div.vxp-multiselectdropdown__suggestions-box > div > div:nth-child(2)',
    selectItemsDropdownThirdOption: '#vxpmultiselectdropdown > div.vxp-multiselectdropdown__suggestions-box > div > div:nth-child(3)',

    hintInputField: '#vxpmultiselectdropdown__hint__input',
    emptySuggestionsLabelInputField: '#vxpmultiselectdropdown__emptySuggestionsLabel__input',
    addNewItemButton: '#vxpmultiselectdropdown_addNewItem__button',
    clearItemsButton: '#vxpmultiselectdropdown_removeAll__button',

    // Selected items' CSS selector
    firstItemInputField: '#vxpmultiselectdropdown_items__label_0_input',
    firstItemSelectbox: '#vxpmultiselectdropdown_items__selected_0_checkbox',
    secondItemInputField: '#vxpmultiselectdropdown_items__label_1_input',
    secondItemSelectbox: '#vxpmultiselectdropdown_items__selected_1_checkbox',
    thirdItemInputField: '#vxpmultiselectdropdown_items__label_2_input',
    thirdItemSelectbox: '#vxpmultiselectdropdown_items__selected_2_checkbox',

    selectedItemsIndexesLabel: '#vxpmultiselectdropdown_selected_indexes',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        return this.waitForElementVisible('@selectItemsDropdown', 3000)
          .waitForElementVisible('@hintInputField', 3000)
          .waitForElementVisible('@emptySuggestionsLabelInputField', 3000)
          .waitForElementVisible('@addNewItemButton', 3000)
          .waitForElementVisible('@clearItemsButton', 3000);
      },

      clickSelectItemsDropdown: function() {
        return this.click('@selectItemsDropdown');
      },

      clickAddNewItemButton: function() {
        return this.click('@addNewItemButton');
      },

      clickClearItemsButton: function() {
        return this.click('@clearItemsButton');
      },

      setHintInputField: function(text) {
        return this.clearValue('@hintInputField').setValue('@hintInputField', text);
      },

      setEmptySuggestionLabelInputField: function(text) {
        return this.clearValue('@emptySuggestionsLabelInputField').setValue('@emptySuggestionsLabelInputField', text);
      },

      addFirstNewItem: function(text) {
        return this.setValue('@firstItemInputField', text);
      },

      addSecondNewItem: function(text) {
        return this.setValue('@secondItemInputField', text);
      },

      addThirdNewItem: function(text) {
        return this.setValue('@thirdItemInputField', text);
      },

      checkEmptySuggestionOption: function() {
        return this.waitForElementVisible('@selectItemsDropdownEmptyOption', 3000);
      },

      checkAddedItemsOptions: function() {
        return this.waitForElementVisible('@selectItemsDropdownFirstOption', 3000)
          .waitForElementVisible('@selectItemsDropdownSecondOption', 3000)
          .waitForElementVisible('@selectItemsDropdownThirdOption', 3000);
      },

      checkAddedItemsElements: function() {
        return this.waitForElementVisible('@firstItemSelectbox', 3000)
          .waitForElementVisible('@secondItemSelectbox', 3000)
          .waitForElementVisible('@thirdItemSelectbox', 3000);
      },

      checkAddedItemsPill: function() {
        return this.waitForElementVisible('@selectItemsDropdownFirstPill', 3000)
          .waitForElementVisible('@selectItemsDropdownSecondPill', 3000)
          .waitForElementVisible('@selectItemsDropdownThirdPill', 3000);
      },

      clickAddedFirstItemCheckbox: function() {
        return this.click('@firstItemSelectbox');
      },

      clickAddedSecondItemCheckbox: function() {
        return this.click('@secondItemSelectbox');
      },

      clickAddedThirdItemCheckbox: function() {
        return this.click('@thirdItemSelectbox');
      },

      checkSelectedItemIndexes: function() {
        return this.waitForElementVisible('@selectedItemsIndexesLabel', 3000);
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
