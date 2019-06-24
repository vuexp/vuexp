const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    backgroundColorSelectbox: '#wraplayout_backgroundColor_input',
    containerWidthInputField: '#wraplayout_width_input',
    containerHeightInputField: '#wraplayout_height_input',
    orientationSelectbox: '#wraplayout_orientation_input',
    containerItemWidthInputField: '#wraplayout_itemWidth_input',
    containerItemHeightInputField: '#wraplayout_itemHeight_input',
    addNewChildButton: '#wraplayout_addNewChild__button',
    removeChildrenButton: '#wraplayout_removeAll__button',
    removeLastChildButton: '#wraplayout_removeLast__button',
    childrenTextInputField: '#wraplayout_itemText_input',
    childrenWidthStepper: '#wraplayout_innerItem_itemWidth_input',
    childrenHeightStepper: '#wraplayout_innerItem_itemHeight_input',
    renderedResultArea: '#wraplayout_thewraplayout',
    renderedFirstChild: '#dynamic-generated-label\\ label_0',
    renderedSecondChild: '#dynamic-generated-label\\ label_1',
    renderedThirdChild: '#dynamic-generated-label\\ label_2',
    renderedFourthChild: '#dynamic-generated-label\\ label_3',
    renderedFifthChild: '#dynamic-generated-label\\ label_4',
    renderedSixthChild: '#dynamic-generated-label\\ label_5',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        return this.waitForElementVisible('@backgroundColorSelectbox', 3000)
          .waitForElementVisible('@containerWidthInputField', 3000)
          .waitForElementVisible('@containerHeightInputField', 3000)
          .waitForElementVisible('@orientationSelectbox', 3000)
          .waitForElementVisible('@containerItemWidthInputField', 3000)
          .waitForElementVisible('@containerItemHeightInputField', 3000)
          .waitForElementVisible('@addNewChildButton', 3000)
          .waitForElementVisible('@removeChildrenButton', 3000)
          .waitForElementVisible('@childrenTextInputField', 3000)
          .waitForElementVisible('@childrenWidthStepper', 3000)
          .waitForElementVisible('@childrenHeightStepper', 3000);
      },

      clickAddNewChildButton: function() {
        return this.click('@addNewChildButton');
      },

      clickRemoveChildButton: function() {
        return this.click('@removeChildrenButton');
      },

      addChild: function(
        color,
        containerWidth,
        containerHeight,
        orientation,
        containerItemWidth,
        containerItemHeight,
        childrenText,
        childrenWidth,
        childrenHeight,
      ) {
        return this.setValue('@backgroundColorSelectbox', color)
          .clearValue('@containerWidthInputField')
          .setValue('@containerWidthInputField', containerWidth)
          .clearValue('@containerHeightInputField')
          .setValue('@containerHeightInputField', containerHeight)
          .setValue('@orientationSelectbox', orientation)
          .clearValue('@containerItemWidthInputField')
          .setValue('@containerItemWidthInputField', containerItemWidth)
          .clearValue('@containerItemHeightInputField')
          .setValue('@containerItemHeightInputField', containerItemHeight)
          .clearValue('@childrenTextInputField')
          .setValue('@childrenTextInputField', childrenText)
          .clearValue('@childrenWidthStepper')
          .setValue('@childrenWidthStepper', childrenWidth)
          .clearValue('@childrenHeightStepper')
          .setValue('@childrenHeightStepper', childrenHeight);
      },

      checkRenderedResult: function() {
        return this.waitForElementVisible('@renderedFirstChild', 3000)
          .waitForElementVisible('@renderedSecondChild', 3000)
          .waitForElementVisible('@renderedThirdChild', 3000)
          .waitForElementVisible('@renderedFourthChild', 3000)
          .waitForElementVisible('@renderedFifthChild', 3000)
          .waitForElementVisible('@renderedSixthChild', 3000)
          .waitForElementVisible('@renderedResultArea', 3000);
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
