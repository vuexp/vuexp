<template>
  <StackLayout>
    <StackLayout class="demo-panel">
      <Label text="Add new child" class="demo-panel__title"/>
      <FlexboxLayout flexDirection="row" flexWrap="wrap" class="input-param-row">
        <StackLayout orientation="horizontal" class="editor-param">
          <Label text="Stretch Last child: "/>
          <input
            id="docklayout_stretchlastchild_cb"
            type="checkbox"
            v-model="stretchLastChildSelected"
          >
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Text: "/>
          <TextField
            v-model="dockChildText"
            id="docklayout_childname_input"
            class="editor-param-input"
          />
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Width: "/>
          <TextField
            id="docklayout_childtwidth_input"
            class="editor-param-input"
            v-model="dockChildWidth"
          />
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Height: "/>
          <TextField
            id="docklayout_childheight_input"
            class="editor-param-input"
            v-model="dockChildHeight"
          />
        </StackLayout>
      </FlexboxLayout>

      <FlexboxLayout
        flexDirection="row"
        flexWrap="wrap"
        class="input-param-row"
        style="margin-top:10px"
      >
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Color: "/>

          <select id="docklayout_childcolor_selectbox" v-model="dockChildColor">
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
          <Label class="editor-param-title" text="Dock: "/>
          <select
            id="docklayout_childdock_selectbox"
            style="margin-left: 5px"
            v-model="dockChildDockMode"
          >
            <option disabled value>Dock</option>
            <option>top</option>
            <option>right</option>
            <option>left</option>
            <option>bottom</option>
            <option>center</option>
          </select>
        </StackLayout>
      </FlexboxLayout>

      <FlexboxLayout
        flexDirection="row"
        flexWrap="wrap"
        class="input-param-row"
        style="margin-top:10px"
      >
        <StackLayout class="editor-param">
          <Button id="docklayout_addchild_button" text="➕ Add Child" @tap="addChildNode"/>
        </StackLayout>
        <StackLayout class="editor-param">
          <Button
            id="docklayout_removeallchildren_button"
            @tap="clearDockChildList"
            text="❌ Remove All Children"
          />
        </StackLayout>
        <StackLayout class="editor-param">
          <Button
            id="docklayoutdoc_rendersample_button"
            @tap="renderSampleSet"
            text=" 🔷 Render Sample Set"
          />
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>

    <!-- Children list editor -->
    <StackLayout orientation="vertical" class="demo-panel">
      <Label :text="'Children list (' + dockChildrenList.length + ')'" class="demo-panel__title"/>
      <FlexboxLayout
        flexDirection="row"
        flexWrap="wrap"
        v-for="(dockChild, index) in dockChildrenList"
        style="margin-top:10px"
        class="input-param-row"
        :key="'children_list_row_' + index"
      >
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Text: "/>
          <TextField
            :id="'docklayout_childreneditor_name' + index"
            style="width:50px"
            v-model="dockChildrenList[index].text"
          />
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Width:"/>
          <TextField
            :id="'docklayout_childreneditor_width' + index"
            class="editor-param-input"
            v-model="dockChildrenList[index].width"
          />
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Height: "/>
          <TextField
            :id="'docklayout_childreneditor_height' + index"
            class="editor-param-input"
            v-model="dockChildrenList[index].height"
          />
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="BgColor: "/>
          <select
            :id="'docklayout_childreneditor_color' + index"
            style="margin-left: 5px"
            v-model="dockChildrenList[index].backgroundColor"
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
          <Label class="editor-param-title" text="Dock: "/>
          <select
            :id="'docklayout_childreneditor_dock' + index"
            style="margin-left: 5px"
            v-model="dockChildrenList[index].dock"
          >
            <option disabled value>Dock</option>
            <option>top</option>
            <option>right</option>
            <option>left</option>
            <option>bottom</option>
            <option>center</option>
          </select>
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Button
            :id="'docklayout_childreneditor_removechild' + index"
            @tap="removeChildAtIndex(index)"
            text="❌"
            style="font-size:9px"
          />
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>
    <!-- Children list editor -->

    <StackLayout style="margin-top:20px" class="demo-panel">
      <Label text="Rendered Result" class="demo-panel__title"/>
      <DockLayout
        id="docklayout_thedocklayout"
        :stretchLastChild="stretchLastChildSelected"
        class="dock input-param-row"
      >
        <Label
          v-for="(dockChild, index) in dockChildrenList"
          v-bind="dockChild"
          :key="'dockChild_' + getRandInt()"
        />
      </DockLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/core/components/Label/Label';
import Button from '../../../src/core/components/Button/Button';
import DockLayout from '../../../src/layouts/DockLayout';
import TextField from '../../../src/core/components/TextField/TextField';
import StackLayout from '../../../src/layouts/StackLayout';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';

export default {
  name: 'DockLayoutLiveDemo',
  data() {
    return {
      stretchLastChildSelected: false,
      dockChildText: 'Test',
      dockChildWidth: '20',
      dockChildHeight: '20',
      dockChildColor: 'gray',
      dockChildDockMode: 'center',
      dockChildrenList: [],
    };
  },
  mounted() {
    this.renderSampleSet();
  },
  methods: {
    addChildNode() {
      this.dockChildrenList.push({
        text: this.dockChildText,
        width: this.dockChildWidth,
        height: this.dockChildHeight,
        backgroundColor: this.dockChildColor,
        dock: this.dockChildDockMode,
      });
    },
    clearDockChildList() {
      this.dockChildrenList = [];
    },
    renderSampleSet() {
      this.dockChildrenList = [];
      this.dockChildrenList.push({ text: 'left', dock: 'left', width: '41', height: '', backgroundColor: 'gray' });
      this.dockChildrenList.push({ text: 'top', dock: 'top', width: '', height: '42', backgroundColor: 'red' });
      this.dockChildrenList.push({ text: 'right', dock: 'right', width: '43', height: '', backgroundColor: 'yellow' });
      this.dockChildrenList.push({ text: 'bottom', dock: 'bottom', width: '', height: '44', backgroundColor: 'blue' });
      this.dockChildrenList.push({ text: 'center', dock: 'center', backgroundColor: 'cyan' });
    },
    removeChildAtIndex(index) {
      this.dockChildrenList.splice(index, 1);
    },
    getRandInt() {
      return Math.floor(Math.random() * 100000);
    },
  },
  components: {
    Label,
    DockLayout,
    StackLayout,
    FlexboxLayout,
    Button,
    TextField,
  },
};
</script>

<style lang="scss" scoped>
.dock {
  width: 300px;
  height: 150px;
  margin-bottom: 30px;
  background-color: #3c495e;
}

.input-param-row {
  margin-left: auto;
  margin-right: auto;
}

.editor-param {
  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;
}

.editor-param-input {
  width: 40px;
  margin-left: 5px;
}

.demo-panel {
  padding: 10px;
  border: #3c495e;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #f1f1f1;
  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}

select {
  border: 1px solid #eaeaea;
  border-radius: 3px;
  padding: 2px 10px 2px 0;
  font-size: 13px;
}

button {
  padding: unset;
  padding-left: 5px;
  padding-right: 5px;
  min-width: unset;
}
</style>
