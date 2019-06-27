const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    // Container properties' selectors
    containerWidth: '#flexboxlayout_containerwidth_input',
    containerHeight: '#flexboxlayout_containerheight_input',
    // Container > Color select-box and its options
    containerColorSelectbox: '#flexboxlayout_containercolor_selectbox',
    containerColorSelectboxOptionTransparent: '#flexboxlayout_containercolor_selectbox > option:nth-child(1)',
    containerColorSelectboxOptionRed: '#flexboxlayout_containercolor_selectbox > option:nth-child(2)',
    containerColorSelectboxOptionGreen: '#flexboxlayout_containercolor_selectbox > option:nth-child(3)',
    containerColorSelectboxOptionBlue: '#flexboxlayout_containercolor_selectbox > option:nth-child(4)',
    containerColorSelectboxOptionYellow: '#flexboxlayout_containercolor_selectbox > option:nth-child(5)',
    // Container's Flex Direction select-box and its options
    containerFlexDirectionSelectbox: '#flexboxlayout_flexdirection_selectbox',
    containerFlexDirectionSelectboxOptionRow: '#flexboxlayout_flexdirection_selectbox > option:nth-child(2)',
    containerFlexDirectionSelectboxOptionRowReverse: '#flexboxlayout_flexdirection_selectbox > option:nth-child(3)',
    containerFlexDirectionSelectboxOptionColumn: '#flexboxlayout_flexdirection_selectbox > option:nth-child(4)',
    containerFlexDirectionSelectboxOptionColumnReverse: '#flexboxlayout_flexdirection_selectbox > option:nth-child(5)',
    // Container's Flex Wrap select-box and its options
    containerFlexWrapSelectbox: '#flexboxlayout_flexwrap_selectbox',
    containerFlexWrapSelectboxOptionNowrap: '#flexboxlayout_flexwrap_selectbox > option:nth-child(2)',
    containerFlexWrapSelectboxOptionWrap: '#flexboxlayout_flexwrap_selectbox > option:nth-child(3)',
    containerFlexWrapSelectboxOptionWrapReverse: '#flexboxlayout_flexwrap_selectbox > option:nth-child(4)',
    // Container's Justify Content select-box and its options
    containerJustifyContentSelectbox: '#flexboxlayout_justifycontent_selectbox',
    containerJustifyContentSelectboxOptionFlexStart: '#flexboxlayout_justifycontent_selectbox > option:nth-child(2)',
    containerJustifyContentSelectboxOptionFlexEnd: '#flexboxlayout_justifycontent_selectbox > option:nth-child(3)',
    containerJustifyContentSelectboxOptionCenter: '#flexboxlayout_justifycontent_selectbox > option:nth-child(4)',
    containerJustifyContentSelectboxOptionSpaceBetween: '#flexboxlayout_justifycontent_selectbox > option:nth-child(5)',
    containerJustifyContentSelectboxOptionSpaceAround: '#flexboxlayout_justifycontent_selectbox > option:nth-child(6)',
    // Container's Align Items select-box and its options
    containerAlignItemsSelectbox: '#flexboxlayout_alignitems_selectbox',
    containerAlignItemsSelectboxOptionFlexStart: '#flexboxlayout_alignitems_selectbox > option:nth-child(2)',
    containerAlignItemsSelectboxOptionFlexEnd: '#flexboxlayout_alignitems_selectbox > option:nth-child(3)',
    containerAlignItemsSelectboxOptionCenter: '#flexboxlayout_alignitems_selectbox > option:nth-child(4)',
    containerAlignItemsSelectboxOptionBaseline: '#flexboxlayout_alignitems_selectbox > option:nth-child(5)',
    containerAlignItemsSelectboxOptionStretch: '#flexboxlayout_alignitems_selectbox > option:nth-child(6)',
    // Container's Align Content select-box and its options
    containerAlignContentSelectbox: '#flexboxlayout_aligncontent_selectbox',
    containerAlignContentSelectboxOptionFlexStart: '#flexboxlayout_aligncontent_selectbox > option:nth-child(2)',
    containerAlignContentSelectboxOptionFlexEnd: '#flexboxlayout_aligncontent_selectbox > option:nth-child(3)',
    containerAlignContentSelectboxOptionCenter: '#flexboxlayout_aligncontent_selectbox > option:nth-child(4)',
    containerAlignContentSelectboxOptionSpaceBetween: '#flexboxlayout_aligncontent_selectbox > option:nth-child(5)',
    containerAlignContentSelectboxOptionSpaceAround: '#flexboxlayout_aligncontent_selectbox > option:nth-child(6)',
    containerAlignContentSelectboxOptionStretch: '#flexboxlayout_aligncontent_selectbox > option:nth-child(7)',

    // Child properties' selectors
    childNameInputField: '#flexboxlayout_childname_input',
    childWidthInputField: '#flexboxlayout_childwidth_input',
    childHeightInputField: '#flexboxlayout_childheight_input',

    // Children color select-box and its options
    childColorSelectbox: '#flexboxlayout_childcolor_selectbox',
    childColorSelectboxOptionTransparent: '#flexboxlayout_childcolor_selectbox > option:nth-child(1)',
    childColorSelectboxOptionRed: '#flexboxlayout_childcolor_selectbox > option:nth-child(2)',
    childColorSelectboxOptionGreen: '#flexboxlayout_childcolor_selectbox > option:nth-child(3)',
    childColorSelectboxOptionBlue: '#flexboxlayout_childcolor_selectbox > option:nth-child(4)',
    childColorSelectboxOptionYellow: '#flexboxlayout_childcolor_selectbox > option:nth-child(5)',

    childOrderInputField: '#flexboxlayout_childorder_input',
    childFlexGrowInputField: '#flexboxlayout_childflexgrow_input',
    childFlexShrinkInputField: '#flexboxlayout_childflexshrink_input',

    // Children align self select-box and its options
    childAlignSelfSelectbox: '#flexboxlayout_childalignself_selectbox',
    childAlignSelfSelectboxOptionFlexStart: '#flexboxlayout_childalignself_selectbox > option:nth-child(2)',
    childAlignSelfSelectboxOptionFlexEnd: '#flexboxlayout_childalignself_selectbox > option:nth-child(3)',
    childAlignSelfSelectboxOptionCenter: '#flexboxlayout_childalignself_selectbox > option:nth-child(4)',
    childAlignSelfSelectboxOptionBaseline: '#flexboxlayout_childalignself_selectbox > option:nth-child(5)',
    childAlignSelfSelectboxOptionStretch: '#flexboxlayout_childalignself_selectbox > option:nth-child(6)',

    childFlexWrapBeforeCheckbox: '#flexboxlayout_childflexwrapbefore_cb',
    // Buttons' selectors
    addChildButton: '#flexboxlayout_addchild_button',
    removeAllChildrenButton: '#flexboxlayout_removeallchildren_button',
    // Children list's selectors
    firstChildren: '#flexboxlayout_container > span:nth-child(1)',
    firstChildrenText: '#docklayout_childreneditor_name0',
    firstChildrenWidth: '#docklayout_childreneditor_width0',
    firstChildrenHeight: '#docklayout_childreneditor_height0',
    firstChildrenColor: '#docklayout_childreneditor_color0',
    firstChildrenRemove: '#docklayout_childreneditor_removechild0',

    secondChildren: '#flexboxlayout_container > span:nth-child(2)',
    secondChildrenText: '#docklayout_childreneditor_name1',
    secondChildrenWidth: '#docklayout_childreneditor_width1',
    secondChildrenHeight: '#docklayout_childreneditor_height1',
    secondChildrenColor: '#docklayout_childreneditor_color1',
    secondChildrenRemove: '#docklayout_childreneditor_removechild1',

    thirdChildren: '#flexboxlayout_container > span:nth-child(3)',
    thirdChildrenText: '#docklayout_childreneditor_name2',
    thirdChildrenWidth: '#docklayout_childreneditor_width2',
    thirdChildrenHeight: '#docklayout_childreneditor_height2',
    thirdChildrenColor: '#docklayout_childreneditor_color2',
    thirdChildrenRemove: '#docklayout_childreneditor_removechild2',

    fourthChildren: '#flexboxlayout_container > span:nth-child(4)',
    fourthChildrenText: '#docklayout_childreneditor_name3',
    fourthChildrenWidth: '#docklayout_childreneditor_width3',
    fourthChildrenHeight: '#docklayout_childreneditor_height3',
    fourthChildrenColor: '#docklayout_childreneditor_color3',
    fourthChildrenRemove: '#docklayout_childreneditor_removechild3',

    // Rendered container's selector
    renderedContainer: '#flexboxlayout_container',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        return this.waitForElementVisible('@containerWidth', 3000)
          .waitForElementVisible('@containerHeight', 3000)
          .waitForElementVisible('@containerColorSelectbox', 3000)
          .waitForElementVisible('@containerFlexDirectionSelectbox', 3000)
          .waitForElementVisible('@containerFlexWrapSelectbox', 3000)
          .waitForElementVisible('@containerJustifyContentSelectbox', 3000)
          .waitForElementVisible('@containerAlignItemsSelectbox', 3000)
          .waitForElementVisible('@containerAlignContentSelectbox', 3000)
          .waitForElementVisible('@childNameInputField', 3000)
          .waitForElementVisible('@childWidthInputField', 3000)
          .waitForElementVisible('@childHeightInputField', 3000)
          .waitForElementVisible('@childColorSelectbox', 3000)
          .waitForElementVisible('@childOrderInputField', 3000)
          .waitForElementVisible('@childFlexGrowInputField', 3000)
          .waitForElementVisible('@childFlexShrinkInputField', 3000)
          .waitForElementVisible('@childAlignSelfSelectbox', 3000)
          .waitForElementVisible('@childFlexWrapBeforeCheckbox', 3000)
          .waitForElementVisible('@addChildButton', 3000)
          .waitForElementVisible('@removeAllChildrenButton', 3000);
      },

      checkRenderedChildrenResult: function() {
        return this.waitForElementVisible('@firstChildren', 3000)
          .waitForElementVisible('@firstChildrenText', 3000)
          .waitForElementVisible('@firstChildrenWidth', 3000)
          .waitForElementVisible('@firstChildrenHeight', 3000)
          .waitForElementVisible('@firstChildrenColor', 3000)
          .waitForElementVisible('@firstChildrenRemove', 3000)
          .waitForElementVisible('@secondChildren', 3000)
          .waitForElementVisible('@secondChildrenText', 3000)
          .waitForElementVisible('@secondChildrenWidth', 3000)
          .waitForElementVisible('@secondChildrenHeight', 3000)
          .waitForElementVisible('@secondChildrenColor', 3000)
          .waitForElementVisible('@secondChildrenRemove', 3000)
          .waitForElementVisible('@thirdChildren', 3000)
          .waitForElementVisible('@thirdChildrenText', 3000)
          .waitForElementVisible('@thirdChildrenWidth', 3000)
          .waitForElementVisible('@thirdChildrenHeight', 3000)
          .waitForElementVisible('@thirdChildrenColor', 3000)
          .waitForElementVisible('@thirdChildrenRemove', 3000)
          .waitForElementVisible('@fourthChildren', 3000)
          .waitForElementVisible('@fourthChildrenText', 3000)
          .waitForElementVisible('@fourthChildrenWidth', 3000)
          .waitForElementVisible('@fourthChildrenHeight', 3000)
          .waitForElementVisible('@fourthChildrenColor', 3000)
          .waitForElementVisible('@fourthChildrenRemove', 3000)
          .waitForElementVisible('@renderedContainer', 3000);
      },

      setContainerProperties: function(
        containerWidth,
        containerHeight,
        containerColor,
        containerFlexDirection,
        containerFlexWrap,
        containerJustifyContent,
        containerAlignItems,
        containerAlignContent,
      ) {
        this.clearValue('@containerWidth')
          .setValue('@containerWidth', containerWidth)
          .clearValue('@containerHeight')
          .setValue('@containerHeight', containerHeight);

        // Switch condition for Color prop on Container
        switch (containerColor) {
          case 'transparent':
            this.click('@containerColorSelectbox');
            this.expect.element('@containerColorSelectboxOptionTransparent').to.be.visible;
            this.click('@containerColorSelectboxOptionTransparent');
            break;

          case 'red':
            this.click('@containerColorSelectbox');
            this.expect.element('@containerColorSelectboxOptionRed').to.be.visible;
            this.click('@containerColorSelectboxOptionRed');
            break;

          case 'green':
            this.click('@containerColorSelectbox');
            this.expect.element('@containerColorSelectboxOptionGreen').to.be.visible;
            this.click('@containerColorSelectboxOptionGreen');
            break;

          case 'blue':
            this.click('@containerColorSelectbox');
            this.expect.element('@containerColorSelectboxOptionBlue').to.be.visible;
            this.click('@containerColorSelectboxOptionBlue');
            break;

          case 'yellow':
            this.click('@containerColorSelectbox');
            this.expect.element('@containerColorSelectboxOptionYellow').to.be.visible;
            this.click('@containerColorSelectboxOptionYellow');
            break;
        }

        // Switch condition for Flex Direction prop on Container
        switch (containerFlexDirection) {
          case 'row':
            this.click('@containerFlexDirectionSelectbox');
            this.expect.element('@containerFlexDirectionSelectboxOptionRow').to.be.visible;
            this.click('@containerFlexDirectionSelectboxOptionRow');
            break;

          case 'row-reverse':
            this.click('@containerFlexDirectionSelectbox');
            this.expect.element('@containerFlexDirectionSelectboxOptionRowReverse').to.be.visible;
            this.click('@containerFlexDirectionSelectboxOptionRowReverse');
            break;

          case 'column':
            this.click('@containerFlexDirectionSelectbox');
            this.expect.element('@containerFlexDirectionSelectboxOptionColumn').to.be.visible;
            this.click('@containerFlexDirectionSelectboxOptionColumn');
            break;

          case 'column-reverse':
            this.click('@containerFlexDirectionSelectbox');
            this.expect.element('@containerFlexDirectionSelectboxOptionColumnReverse').to.be.visible;
            this.click('@containerFlexDirectionSelectboxOptionColumnReverse');
            break;
        }

        // Switch condition for Flex Wrap prop on container
        switch (containerFlexWrap) {
          case 'nowrap':
            this.click('@containerFlexWrapSelectbox');
            this.expect.element('@containerFlexWrapSelectboxOptionNowrap').to.be.visible;
            this.click('@containerFlexWrapSelectboxOptionNowrap');
            break;

          case 'wrap':
            this.click('@containerFlexWrapSelectbox');
            this.expect.element('@containerFlexWrapSelectboxOptionWrap').to.be.visible;
            this.click('@containerFlexWrapSelectboxOptionWrap');
            break;

          case 'wrap-reverse':
            this.click('@containerFlexWrapSelectbox');
            this.expect.element('@containerFlexWrapSelectboxOptionWrapReverse').to.be.visible;
            this.click('@containerFlexWrapSelectboxOptionWrapReverse');
            break;
        }

        // Switch condition for Justify Content prop on container
        switch (containerJustifyContent) {
          case 'flex-start':
            this.click('@containerJustifyContentSelectbox');
            this.expect.element('@containerJustifyContentSelectboxOptionFlexStart').to.be.visible;
            this.click('@containerJustifyContentSelectboxOptionFlexStart');
            break;

          case 'flex-end':
            this.click('@containerJustifyContentSelectbox');
            this.expect.element('@containerJustifyContentSelectboxOptionFlexEnd').to.be.visible;
            this.click('@containerJustifyContentSelectboxOptionFlexEnd');
            break;

          case 'center':
            this.click('@containerJustifyContentSelectbox');
            this.expect.element('@containerJustifyContentSelectboxOptionCenter').to.be.visible;
            this.click('@containerJustifyContentSelectboxOptionCenter');
            break;

          case 'space-between':
            this.click('@containerJustifyContentSelectbox');
            this.expect.element('@containerJustifyContentSelectboxOptionSpaceBetween').to.be.visible;
            this.click('@containerJustifyContentSelectboxOptionSpaceBetween');
            break;

          case 'space-around':
            this.click('@containerJustifyContentSelectbox');
            this.expect.element('@containerJustifyContentSelectboxOptionSpaceAround').to.be.visible;
            this.click('@containerJustifyContentSelectboxOptionSpaceAround');
            break;
        }

        // Switch condition for Align Items on container

        switch (containerAlignItems) {
          case 'flex-start':
            this.click('@containerAlignItemsSelectbox');
            this.expect.element('@containerAlignItemsSelectboxOptionFlexStart').to.be.visible;
            this.click('@containerAlignItemsSelectboxOptionFlexStart');
            break;

          case 'flex-end':
            this.click('@containerAlignItemsSelectbox');
            this.expect.element('@containerAlignItemsSelectboxOptionFlexEnd').to.be.visible;
            this.click('@containerAlignItemsSelectboxOptionFlexEnd');
            break;

          case 'center':
            this.click('@containerAlignItemsSelectbox');
            this.expect.element('@containerAlignItemsSelectboxOptionCenter').to.be.visible;
            this.click('@containerAlignItemsSelectboxOptionCenter');
            break;

          case 'baseline':
            this.click('@containerAlignItemsSelectbox');
            this.expect.element('@containerAlignItemsSelectboxOptionBaseline').to.be.visible;
            this.click('@containerAlignItemsSelectboxOptionBaseline');
            break;

          case 'stretch':
            this.click('@containerAlignItemsSelectbox');
            this.expect.element('@containerAlignItemsSelectboxOptionStretch').to.be.visible;
            this.click('@containerAlignItemsSelectboxOptionStretch');
            break;
        }

        // Switch condition for Align Content prop on container

        switch (containerAlignContent) {
          case 'flex-start':
            this.click('@containerAlignContentSelectbox');
            this.expect.element('@containerAlignContentSelectboxOptionFlexStart').to.be.visible;
            this.click('@containerAlignContentSelectboxOptionFlexStart');
            break;

          case 'flex-end':
            this.click('@containerAlignContentSelectbox');
            this.expect.element('@containerAlignContentSelectboxOptionFlexEnd').to.be.visible;
            this.click('@containerAlignContentSelectboxOptionFlexEnd');
            break;

          case 'center':
            this.click('@containerAlignContentSelectbox');
            this.expect.element('@containerAlignContentSelectboxOptionCenter').to.be.visible;
            this.click('@containerAlignContentSelectboxOptionCenter');
            break;

          case 'space-between':
            this.click('@containerAlignContentSelectbox');
            this.expect.element('@containerAlignContentSelectboxOptionSpaceBetween').to.be.visible;
            this.click('@containerAlignContentSelectboxOptionSpaceBetween');
            break;

          case 'space-around':
            this.click('@containerAlignContentSelectbox');
            this.expect.element('@containerAlignContentSelectboxOptionSpaceAround').to.be.visible;
            this.click('@containerAlignContentSelectboxOptionSpaceAround');
            break;

          case 'stretch':
            this.click('@containerAlignContentSelectbox');
            this.expect.element('@containerAlignContentSelectboxOptionStretch').to.be.visible;
            this.click('@containerAlignContentSelectboxOptionStretch');
            break;
        }
        return this;
      },

      setChildProperties: function(childName, childWidth, childHeight, childColor, childOrder, childFlexGrow, childFlexShrink, childAlignSelf) {
        this.clearValue('@childNameInputField')
          .setValue('@childNameInputField', childName)
          .clearValue('@childWidthInputField')
          .setValue('@childWidthInputField', childWidth)
          .clearValue('@childHeightInputField')
          .setValue('@childHeightInputField', childHeight);

        // Switch condition for color prop on children

        switch (childColor) {
          case 'transparent':
            this.click('@childColorSelectbox');
            this.expect.element('@childColorSelectboxOptionTransparent').to.be.visible;
            this.click('@childColorSelectboxOptionTransparent');
            break;

          case 'red':
            this.click('@childColorSelectbox');
            this.expect.element('@childColorSelectboxOptionRed').to.be.visible;
            this.click('@childColorSelectboxOptionRed');
            break;

          case 'green':
            this.click('@childColorSelectbox');
            this.expect.element('@childColorSelectboxOptionGreen').to.be.visible;
            this.click('@childColorSelectboxOptionGreen');
            break;

          case 'blue':
            this.click('@childColorSelectbox');
            this.expect.element('@childColorSelectboxOptionBlue').to.be.visible;
            this.click('@childColorSelectboxOptionBlue');
            break;

          case 'yellow':
            this.click('@childColorSelectbox');
            this.expect.element('@childColorSelectboxOptionYellow').to.be.visible;
            this.click('@childColorSelectboxOptionYellow');
            break;
        }

        this.clearValue('@childOrderInputField')
          .setValue('@childOrderInputField', childOrder)
          .clearValue('@childFlexGrowInputField')
          .setValue('@childFlexGrowInputField', childFlexGrow)
          .clearValue('@childFlexShrinkInputField')
          .setValue('@childFlexShrinkInputField', childFlexShrink);

        switch (childAlignSelf) {
          case 'flex-start':
            this.click('@childAlignSelfSelectbox');
            this.expect.element('@childAlignSelfSelectboxOptionFlexStart').to.be.visible;
            this.click('@childAlignSelfSelectboxOptionFlexStart');
            break;

          case 'flex-end':
            this.click('@childAlignSelfSelectbox');
            this.expect.element('@childAlignSelfSelectboxOptionFlexEnd').to.be.visible;
            this.click('@childAlignSelfSelectboxOptionFlexEnd');
            break;

          case 'center':
            this.click('@childAlignSelfSelectbox');
            this.expect.element('@childAlignSelfSelectboxOptionCenter').to.be.visible;
            this.click('@childAlignSelfSelectboxOptionCenter');
            break;

          case 'baseline':
            this.click('@childAlignSelfSelectbox');
            this.expect.element('@childAlignSelfSelectboxOptionBaseline').to.be.visible;
            this.click('@childAlignSelfSelectboxOptionBaseline');
            break;

          case 'stretch':
            this.click('@childAlignSelfSelectbox');
            this.expect.element('@childAlignSelfSelectboxOptionStretch').to.be.visible;
            this.click('@childAlignSelfSelectboxOptionStretch');
            break;
        }
        return this;
      },

      clickChildFlexWrapBefore: function() {
        return this.click('@childFlexWrapBeforeCheckbox');
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
