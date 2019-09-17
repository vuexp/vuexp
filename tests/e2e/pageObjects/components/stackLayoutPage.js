const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    stackLayoutSelectbox: '#stacklayout_orientation_content',
    textInputField: '#stacklayout_childname_input',
    widthSelectbox: '#stacklayout_childtwidth_input',
    heightSelectbox: '#stacklayout_childheight_input',
    colorSelectbox: '#stacklayout_childcolor_selectbox',
    alignmentTypeSelectbox: '#stacklayout_childalignmenttype_selectbox',
    alignmentValueSelectbox: '#stacklayout_childalignmentvalue_selectbox',
    addChildButton: '#stacklayout_addchild_button',
    removeAllChildrenButton: '#stacklayout_removeallchildren_button',
    renderSampleSetButton: '#stacklayoutdoc-checkbox-textwrap',
    renderedResultArea: 'div.nudoc-example__content > div > div:nth-child(3)',
    firstRenderedChild: '#stacklayout_thestacklayout > span:nth-child(1)',
    secondRenderedChild: '#stacklayout_thestacklayout > span:nth-child(2)',
    thirdRenderedChild: '#stacklayout_thestacklayout > span:nth-child(3)',
    fourthRenderedChild: '#stacklayout_thestacklayout > span:nth-child(4)',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        return this.waitForElementVisible('@stackLayoutSelectbox', 3000)
          .waitForElementVisible('@textInputField', 3000)
          .waitForElementVisible('@widthSelectbox', 3000)
          .waitForElementVisible('@heightSelectbox', 3000)
          .waitForElementVisible('@colorSelectbox', 3000)
          .waitForElementVisible('@alignmentTypeSelectbox', 3000)
          .waitForElementVisible('@alignmentValueSelectbox', 3000)
          .waitForElementVisible('@addChildButton', 3000)
          .waitForElementVisible('@removeAllChildrenButton', 3000)
          .waitForElementVisible('@renderSampleSetButton', 3000);
      },

      addChild: function(stackLayoutOrientation, text, width, height, color, alignmentType, alignmentValue) {
        return this.setValue('@stackLayoutSelectbox', stackLayoutOrientation)
          .clearValue('@textInputField')
          .setValue('@textInputField', text)
          .clearValue('@widthSelectbox')
          .setValue('@widthSelectbox', width)
          .clearValue('@heightSelectbox')
          .setValue('@heightSelectbox', height)
          .setValue('@colorSelectbox', color)
          .setValue('@alignmentTypeSelectbox', alignmentType)
          .setValue('@alignmentValueSelectbox', alignmentValue);
      },

      checkRenderedResult: function() {
        return this.waitForElementVisible('@renderedResultArea', 3000);
      },

      clickAddChildButton: function() {
        return this.click('@addChildButton');
      },

      clickRemoveAllChildrenButton: function() {
        return this.click('@removeAllChildrenButton');
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
