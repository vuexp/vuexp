<template>
  <StackLayout>
    <Label text="Container Properties" class="option-title"/>

    <StackLayout orientation="horizontal">
      <Label text="Width" class="option-label"/>
      <input id="flexboxlayout_containerwidth_input" type="text" v-model="containerWidth">
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Height" class="option-label"/>
      <input id="flexboxlayout_containerheight_input" type="text" v-model="containerHeight">
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Color" class="option-label"/>
      <select id="flexboxlayout_containercolor_selectbox" v-model="containerColor">
        <option value="transparent">transparent</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
      </select>
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Flex Direction" class="option-label"/>
      <select id="flexboxlayout_flexdirection_selectbox" v-model="containerFlexDirection">
        <option value="row">row</option>
        <option value="row-reverse">row-reverse</option>
        <option value="column">column</option>
        <option value="column-reverse">column-reverse</option>
      </select>
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Flex Wrap" class="option-label"/>
      <select id="flexboxlayout_flexwrap_selectbox" v-model="flexWrap">
        <option value="nowrap">nowrap</option>
        <option value="wrap">wrap</option>
        <option value="wrap-reverse">wrap-reverse</option>
      </select>
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Justify Content" class="option-label"/>
      <select id="flexboxlayout_justifycontent_selectbox" v-model="justifyContent">
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="center">center</option>
        <option value="space-between">space-between</option>
        <option value="space-around">space-around</option>
      </select>
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Align Items" class="option-label"/>
      <select id="flexboxlayout_alignitems_selectbox" v-model="alignItems">
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="center">center</option>
        <option value="baseline">baseline</option>
        <option value="stretch">stretch</option>
      </select>
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Align Content" class="option-label"/>
      <select id="flexboxlayout_aligncontent_selectbox" v-model="alignContent">
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="center">center</option>
        <option value="space-between">space-between</option>
        <option value="space-around">space-around</option>
        <option value="stretch">stretch</option>
      </select>
    </StackLayout>

    <Label text="Child Properties" class="option-title"/>

    <StackLayout orientation="horizontal">
      <Label text="Name" class="option-label"/>
      <input id="flexboxlayout_childname_input" type="text" v-model="childName">
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Width" class="option-label"/>
      <input id="flexboxlayout_childwidth_input" type="text" v-model="childWidth">
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Height" class="option-label"/>
      <input id="flexboxlayout_childheight_input" type="text" v-model="childHeight">
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Color" class="option-label"/>
      <select id="flexboxlayout_childcolor_selectbox" v-model="childColor">
        <option value="transparent">transparent</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
      </select>
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Order" class="option-label"/>
      <input id="flexboxlayout_childorder_input" type="text" v-model="childOrder">
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Flex Grow" class="option-label"/>
      <input id="flexboxlayout_childflexgrow_input" type="text" v-model="childFlexGrow">
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Flex Shrink" class="option-label"/>
      <input id="flexboxlayout_childflexshrink_input" type="text" v-model="childFlexShrink">
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Align Self" class="option-label"/>
      <select id="flexboxlayout_childalignself_selectbox" v-model="childAlignSelf">
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="center">center</option>
        <option value="baseline">baseline</option>
        <option value="stretch">stretch</option>
      </select>
    </StackLayout>

    <StackLayout orientation="horizontal">
      <Label text="Flex Wrap Before" class="option-label"/>
      <input id="flexboxlayout_childflexwrapbefore_cb" type="checkbox" v-model="childWrapBefore">
    </StackLayout>

    <StackLayout orientation="horizontal">
      <input id="flexboxlayout_addchild_button" type="button" value="Add Child" @click="addChild">
      <input
        id="flexboxlayout_removeallchildren_button"
        type="button"
        value="Remove All Children"
        @click="removeChildren"
      >
    </StackLayout>

    <!-- Children list editor -->
    <StackLayout orientation="vertical" class="demo-panel">
      <Label :text="'Children list (' + childrenList.length + ')'" class="demo-panel__title"/>
      <StackLayout orientation="horizontal" v-for="(child, index) in childrenList">
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="T: "/>
          <input :id="'docklayout_childreneditor_name' + index" type="text" style="width:50px" v-model="childrenList[index].text">
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="W:"/>
          <input
            :id="'docklayout_childreneditor_width' + index"
            class="editor-param-input"
            type="text"
            v-model="childrenList[index].width"
          >
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="H: "/>
          <input
            :id="'docklayout_childreneditor_height' + index"
            class="editor-param-input"
            type="text"
            v-model="childrenList[index].height"
          >
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="C: "/>
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
        </StackLayout>
        
        <StackLayout orientation="horizontal" class="editor-param">
          <button :id="'docklayout_childreneditor_removechild' + index" @click="removeChildAtIndex(index)">❌</button>
        </StackLayout>
      </StackLayout>
    </StackLayout>
    <!-- Children list editor -->

    <Label text="Container" class="option-title"/>

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
        v-for="(child, index) in childrenList"
        v-bind="child"
        :key="'flexboxLayoutChild_' + getRandInt()"
      />
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'FlexboxLayoutLiveDemo',
  components: {
    FlexboxLayout,
    StackLayout,
    Label,
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
        style: {
          order: this.childOrder,
          flexGrow: this.childFlexGrow,
          flexShrink: this.childFlexShrink,
          alignSelf: this.childAlignSelf,
          flexWrapBefore: this.childWrapBefore,
        },
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

.option-label {
  margin-right: 10px;
  margin-bottom: 5px;
}

.option-title {
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 5px;
}
</style>
