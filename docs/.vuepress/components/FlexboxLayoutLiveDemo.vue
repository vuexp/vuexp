<template>
  <StackLayout>
    <StackLayout class="demo-panel">
      <Label text="Container Properties" class="demo-panel__title"/>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Width" class="option-label"/>
        <TextField id="flexboxlayout_containerwidth_input" v-model="containerWidth" class="option-input"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Height" class="option-label"/>
        <TextField id="flexboxlayout_containerheight_input" v-model="containerHeight" class="option-input"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Color" class="option-label"/>
        <select id="flexboxlayout_containercolor_selectbox" v-model="containerColor" class="option-input">
          <option value="transparent">transparent</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Flex Direction" class="option-label"/>
        <select id="flexboxlayout_flexdirection_selectbox" v-model="containerFlexDirection" class="option-input">
          <option value=""></option>
          <option value="row">row</option>
          <option value="row-reverse">row-reverse</option>
          <option value="column">column</option>
          <option value="column-reverse">column-reverse</option>
        </select>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Flex Wrap" class="option-label"/>
        <select id="flexboxlayout_flexwrap_selectbox" v-model="flexWrap" class="option-input">
          <option value=""></option>
          <option value="nowrap">nowrap</option>
          <option value="wrap">wrap</option>
          <option value="wrap-reverse">wrap-reverse</option>
        </select>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Justify Content" class="option-label"/>
        <select id="flexboxlayout_justifycontent_selectbox" v-model="justifyContent" class="option-input">
          <option value=""></option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
        </select>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Align Items" class="option-label"/>
        <select id="flexboxlayout_alignitems_selectbox" v-model="alignItems" class="option-input">
          <option value=""></option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="baseline">baseline</option>
          <option value="stretch">stretch</option>
        </select>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Align Content" class="option-label"/>
        <select id="flexboxlayout_aligncontent_selectbox" v-model="alignContent" class="option-input">
          <option value=""></option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="stretch">stretch</option>
        </select>
      </FlexboxLayout>
    </StackLayout>

    <StackLayout class="demo-panel">
      <Label text="Child Properties" class="demo-panel__title"/>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Name" class="option-label"/>
        <TextField id="flexboxlayout_childname_input" v-model="childName" class="option-input"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Width" class="option-label"/>
        <TextField id="flexboxlayout_childwidth_input" v-model="childWidth" class="option-input"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Height" class="option-label"/>
        <TextField id="flexboxlayout_childheight_input" v-model="childHeight" class="option-input"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Color" class="option-label"/>
        <select id="flexboxlayout_childcolor_selectbox" v-model="childColor" class="option-input">
          <option value="transparent">transparent</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Order" class="option-label"/>
        <TextField id="flexboxlayout_childorder_input" v-model="childOrder" class="option-input"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Flex Grow" class="option-label"/>
        <TextField id="flexboxlayout_childflexgrow_input" v-model="childFlexGrow" class="option-input"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Flex Shrink" class="option-label"/>
        <TextField id="flexboxlayout_childflexshrink_input" v-model="childFlexShrink" class="option-input"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Align Self" class="option-label"/>
        <select id="flexboxlayout_childalignself_selectbox" v-model="childAlignSelf" class="option-input">
          <option value=""></option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="baseline">baseline</option>
          <option value="stretch">stretch</option>
        </select>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Flex Wrap Before" class="option-label"/>
        <input id="flexboxlayout_childflexwrapbefore_cb" type="checkbox" v-model="childWrapBefore">
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Button id="flexboxlayout_addchild_button" text="Add Child" @tap="addChild" style="margin: 10px 10px 10px 0px" />
        <Button id="flexboxlayout_removeallchildren_button" text="Remove All Children" @tap="removeChildren" style="margin: 10px 10px 10px 10px" />
      </FlexboxLayout>

    </StackLayout>

    <!-- Children list editor -->
    <StackLayout orientation="vertical" class="demo-panel">
      <Label :text="'Children list (' + childrenList.length + ')'" class="demo-panel__title"/>
      <StackLayout orientation="horizontal" v-for="(child, index) in childrenList" :key="'children_list_row_' + index">
        <FlexboxLayout flexWrap="wrap" class="option-row">
          <Label class="editor-param-title" text="Text: "/>
          <TextField :id="'docklayout_childreneditor_name' + index" style="width:50px" v-model="childrenList[index].text" />

          <Label class="editor-param-title" text="Width:"/>
          <TextField
            :id="'docklayout_childreneditor_width' + index"
            class="editor-param-input"
            v-model="childrenList[index].width"
          />

          <Label class="editor-param-title" text="Height: "/>
          <TextField
            :id="'docklayout_childreneditor_height' + index"
            class="editor-param-input"
            v-model="childrenList[index].height"
          />

          <Label class="editor-param-title" text="Color: "/>
          <select
            :id="'docklayout_childreneditor_color' + index"
            style="margin-left: 5px"
            v-model="childrenList[index].backgroundColor"
          >
            <option disabled value>Color</option>
            <option>red</option>
            <option>green</option>
            <option>blue</option>
            <option>yellow</option>
            <option>cyan</option>
            <option>orange</option>
            <option>gray</option>
          </select>

          <Button :id="'docklayout_childreneditor_removechild' + index" @tap="removeChildAtIndex(index)" text="❌" style="min-width: auto; padding: 2px; margin-left: 5px" />

        </FlexboxLayout>
      </StackLayout>
    </StackLayout>
    <!-- Children list editor -->

    <StackLayout class="demo-panel">
      <Label text="Container" class="demo-panel__title"/>

      <FlexboxLayout
        id="flexboxlayout_container"
        class="flexbox"
        :backgroundColor="containerColor"
        :width="containerWidth"
        :height="containerHeight"
        :flexDirection="containerFlexDirection"
        :flexWrap="flexWrap"
        :justifyContent="justifyContent"
        :alignItems="alignItems"
        :alignContent="alignContent"
      >
        <Label
          v-for="child in childrenList"
          v-bind="child"
          :key="'flexboxLayoutChild_' + getRandInt()"
        />
      </FlexboxLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/core/components/Label/Label';
import Button from '../../../src/core/components/Button/Button';
import TextField from '../../../src/core/components/TextField/TextField';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'FlexboxLayoutLiveDemo',
  components: {
    FlexboxLayout,
    StackLayout,
    Label,
    Button,
    TextField,
  },
  data() {
    return {
      containerWidth: 'auto',
      containerHeight: 'auto',
      containerColor: 'transparent',
      containerFlexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
      childName: 'child-name',
      childWidth: 'auto',
      childHeight: 'auto',
      childColor: 'transparent',
      childOrder: '0',
      childFlexGrow: '0',
      childFlexShrink: '1',
      childAlignSelf: 'stretch',
      childWrapBefore: false,
      childrenList: [],
    };
  },
  methods: {
    addChild() {
      this.childrenList.push({
        text: this.childName,
        width: this.childWidth,
        height: this.childHeight,
        backgroundColor: this.childColor,
        order: this.childOrder,
        flexGrow: this.childFlexGrow,
        flexShrink: this.childFlexShrink,
        alignSelf: this.childAlignSelf,
        flexWrapBefore: this.childWrapBefore,
      });
    },
    removeChildren() {
      this.childrenList = [];
    },
    getRandInt() {
      return Math.floor(Math.random() * 100000);
    },
    removeChildAtIndex(index) {
      this.childrenList.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.flexbox {
  color: #2c3e50;
}

.demo-panel {
  padding: 10px;
  border: #3c495e;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #f1f1f1;

  &__title {
    font-size:20px; 
    font-weight:bold; 
    margin-bottom:10px;
  }
}

.editor-param-input {
  width: 50px;
}

.option-label {
  margin-right: 10px;
  margin-bottom: 5px;
  width: 130px;
}

.option-input {
  width: 130px;
}

.option-row {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 100%;
}

.editor-param-title {
  margin: 0 5px 0 5px;
}

select {
  border: 1px solid #eaeaea;
  border-radius: 3px;
  padding: 2px 10px 2px 0;
}

button {
  padding: unset;
  padding-left: 5px;
  padding-right: 5px;
  min-width: unset;
}
</style>
