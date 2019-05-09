<template>
  <StackLayout>
    <StackLayout class="demo-panel">
      <Label text="Add New Child" class="demo-panel__title" />
      <FlexboxLayout alignSelf="center" flex-wrap="wrap" style="margin-bottom:5px">
        <StackLayout orientation="horizontal" class="editor-param">
          <Label text="Orientation: " />
          <select id="stacklayout_orientation_content" style="margin-left: 5px" v-model="orientationType">
            <option disabled value>Orientation</option>
            <option>vertical</option>
            <option>horizontal</option>
          </select>
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Text: " />
          <TextField id="stacklayout_childname_input" class="editor-param-input" v-model="stackChildText"></TextField>
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Width: " />
          <TextField id="stacklayout_childtwidth_input" class="editor-param-input" v-model="stackChildWidth"></TextField>
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Height: " />
          <TextField id="stacklayout_childheight_input" class="editor-param-input" v-model="stackChildHeight"></TextField>
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Color: " />

          <select id="stacklayout_childcolor_selectbox" style="margin-left: 5px" v-model="stackChildColor">
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
      </FlexboxLayout>

      <FlexboxLayout flex-wrap="wrap" alignSelf="center">
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Child Alignment Type: " />
          <select id="stacklayout_childalignmenttype_selectbox" style="margin-left: 5px" v-model="stackChildAlignmentType">
            <option disabled value>Alignment Type</option>
            <option>verticalAlignment</option>
            <option>horizontalAlignment</option>
          </select>
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Child Alignment Value: " />
          <select id="stacklayout_childalignmentvalue_selectbox" style="margin-left: 5px" v-model="stackChildAlignmentValue">
            <option disabled value>Alignment Value</option>
            <option>top</option>
            <option>right</option>
            <option>left</option>
            <option>bottom</option>
            <option>center</option>
            <option>stretch</option>
          </select>
        </StackLayout>
      </FlexboxLayout>

      <FlexboxLayout flex-wrap="wrap" class="editor-param" alignSelf="center">
        <StackLayout class="editor-param">
          <Button id="stacklayout_addchild_button" @tap="addChildNode">➕ Add Child</Button>
        </StackLayout>
        <StackLayout class="editor-param">
          <Button id="stacklayout_removeallchildren_button" @tap="clearStackChildList">❌ Remove All Children</Button>
        </StackLayout>
        <StackLayout class="editor-param">
          <Button id="stacklayoutdoc-checkbox-textwrap" @tap="renderSampleSet">🔷 Render Sample Set</Button>
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>

    <!-- Children list editor -->
    <StackLayout orientation="vertical" class="demo-panel">
      <Label :text="'Children List (' + stackChildrenList.length + ')'" class="demo-panel__title" />
      <StackLayout v-for="(stackChild, index) in stackChildrenList" :key="'stackChild_' + getRandInt()" class="child-panel" alignSelf="center">
        <FlexboxLayout flex-wrap="wrap" alignSelf="center">
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Top: " />
            <TextField :id="'stacklayout_childreneditor_name' + index" style="width:50px" v-model="stackChildrenList[index].text"></TextField>
          </StackLayout>
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Width:" />
            <TextField :id="'stacklayout_childreneditor_width' + index" class="editor-param-input" v-model="stackChildrenList[index].width"></TextField>
          </StackLayout>
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Height: " />
            <TextField :id="'stacklayout_childreneditor_height' + index" class="editor-param-input" v-model="stackChildrenList[index].height"></TextField>
          </StackLayout>
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Color: " />
            <select :id="'stacklayout_childreneditor_color' + index" style="margin-left: 5px" v-model="stackChildrenList[index].backgroundColor">
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
        </FlexboxLayout>
        <FlexboxLayout flex-wrap="wrap" alignSelf="center">
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Alignment Type: " />
            <select :id="'stacklayout_childreneditor_alignment_type' + index" style="margin-left: 5px" v-model="stackChildrenList[index].alignmentType">
              <option disabled value>Alignment Type</option>
              <option>verticalAlignment</option>
              <option>horizontalAlignment</option>
            </select>
          </StackLayout>
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Alignment Value: " />
            <select :id="'stacklayout_childreneditor_alignment_value' + index" class="editor-param-select" v-model="stackChildrenList[index].alignmentValue">
              <option disabled value>Alignment Value</option>
              <option>top</option>
              <option>right</option>
              <option>left</option>
              <option>bottom</option>
              <option>center</option>
              <option>stretch</option>
            </select>
          </StackLayout>

          <StackLayout orientation="horizontal" class="editor-param">
            <Button :id="'stacklayout_childreneditor_removechild' + index" @tap="removeChildAtIndex(index)" class="vxp-button-remove">❌</Button>
          </StackLayout>
        </FlexboxLayout>
      </StackLayout>
    </StackLayout>
    <!-- Children list editor -->

    <StackLayout style="margin-top:20px" class="demo-panel">
      <Label text="Rendered Result" class="demo-panel__title" />
      <StackLayout id="stacklayout_thestacklayout" :orientation="orientationType" class="stack">
        <Label v-for="stackChild in labelList" v-bind="stackChild" :key="'stackChild_' + getRandInt()" />
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import StackLayout from '../../../src/layouts/StackLayout';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import Button from '../../../src/components/Button';
import TextField from '../../../src/components/TextField';

export default {
  name: 'StackLayoutLiveDemo',
  data() {
    return {
      orientationType: 'vertical',
      stackChildText: 'Test',
      stackChildWidth: '20',
      stackChildHeight: '20',
      stackChildColor: 'gray',
      stackChildAlignmentType: 'horizontalAlignment',
      stackChildAlignmentValue: 'left',
      stackChildrenList: [],
    };
  },
  computed: {
    labelList() {
      return this.stackChildrenList.map(stackChild => ({
        text: stackChild.text,
        [stackChild.alignmentType]: stackChild.alignmentValue,
        width: stackChild.width,
        height: stackChild.height,
        backgroundColor: stackChild.backgroundColor,
      }));
    },
  },
  mounted() {
    this.renderSampleSet();
  },
  methods: {
    addChildNode() {
      this.stackChildrenList.push({
        text: this.stackChildText,
        width: this.stackChildWidth,
        height: this.stackChildHeight,
        backgroundColor: this.stackChildColor,
        alignmentType: this.stackChildAlignmentType,
        alignmentValue: this.stackChildAlignmentValue,
      });
    },
    clearStackChildList() {
      this.stackChildrenList = [];
    },
    renderSampleSet() {
      this.stackChildrenList = [];
      this.stackChildrenList.push({
        text: 'left',
        alignmentType: 'horizontalAlignment',
        alignmentValue: 'left',
        width: '41',
        height: '',
        backgroundColor: 'gray',
      });
      this.stackChildrenList.push({
        text: 'top',
        alignmentType: 'horizontalAlignment',
        alignmentValue: 'center',
        width: '',
        height: '42',
        backgroundColor: 'red',
      });
      this.stackChildrenList.push({
        text: 'right',
        alignmentType: 'horizontalAlignment',
        alignmentValue: 'right',
        width: '43',
        height: '',
        backgroundColor: 'yellow',
      });
      this.stackChildrenList.push({
        text: 'bottom',
        alignmentType: 'horizontalAlignment',
        alignmentValue: 'left',
        width: '',
        height: '44',
        backgroundColor: 'blue',
      });
      this.stackChildrenList.push({ text: 'center', alignmentType: 'horizontalAlignment', alignmentValue: 'left', backgroundColor: 'green' });
    },
    removeChildAtIndex(index) {
      this.stackChildrenList.splice(index, 1);
    },
    getRandInt() {
      return Math.floor(Math.random() * 100000);
    },
  },
  components: {
    FlexboxLayout,
    Label,
    StackLayout,
    Button,
    TextField,
  },
};
</script>

<style lang="scss" scoped>
.stack {
  width: 100%;
  height: 150px;
  margin-bottom: 30px;
  background-color: #3c495e;
}
.editor-param {
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.editor-param-input {
  width: 30px;
  margin-left: 5px;
}
.editor-param-select {
  width: 100px;
  margin-left: 5px;
}
.vxp-button {
  padding: 8px;
  min-width: unset;
}
.vxp-button-remove {
  padding: 2px;
}
.demo-panel {
  padding: 10px;
  border: #3c495e;
  border-radius: 5px;
  margin: 10px;
  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
.child-panel {
  margin-bottom: 10px;
  border-bottom-color: #989898;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
</style>
