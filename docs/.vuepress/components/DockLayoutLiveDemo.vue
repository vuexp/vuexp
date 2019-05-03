<template>
  <StackLayout>
    <StackLayout class="demo-panel">
      <Label text="Add new child" class="demo-panel__title"/>
      <StackLayout orientation="horizontal" style="margin-bottom:5px">
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
      </StackLayout>

      <StackLayout orientation="horizontal">
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Color: "/>

          <select
            id="docklayout_childcolor_selectbox"
            style="margin-left: 5px"
            v-model="dockChildColor"
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
      </StackLayout>

      <StackLayout orientation="horizontal" class="editor-param">
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
      </StackLayout>
    </StackLayout>

    <!-- Children list editor -->
    <StackLayout orientation="vertical" class="demo-panel">
      <Label :text="'Children list (' + dockChildrenList.length + ')'" class="demo-panel__title"/>
      <StackLayout orientation="horizontal" v-for="(dockChild, index) in dockChildrenList">
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="T: "/>
          <TextField
            :id="'docklayout_childreneditor_name' + index"
            style="width:50px"
            v-model="dockChildrenList[index].text"
          />
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="W:"/>
          <TextField
            :id="'docklayout_childreneditor_width' + index"
            class="editor-param-input"
            v-model="dockChildrenList[index].width"
          />
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="H: "/>
          <TextField
            :id="'docklayout_childreneditor_height' + index"
            class="editor-param-input"
            v-model="dockChildrenList[index].height"
          />
        </StackLayout>
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="C: "/>
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
          <Label class="editor-param-title" text="D: "/>
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
      </StackLayout>
    </StackLayout>
    <!-- Children list editor -->

    <StackLayout style="margin-top:20px" class="demo-panel">
      <Label text="Rendered Result" class="demo-panel__title"/>
      <DockLayout
        id="docklayout_thedocklayout"
        :stretchLastChild="stretchLastChildSelected"
        class="dock"
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
import Label from '../../../src/components/Label';
import Button from '../../../src/components/Button';
import DockLayout from '../../../src/layouts/DockLayout';
import TextField from '../../../src/components/TextField';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'DockLayoutLiveDemo',
  data() {
    return {
      stretchLastChildSelected: true,
      dockChildText: 'Test',
      dockChildWidth: '20',
      dockChildHeight: '20',
      dockChildColor: 'gray',
      dockChildDockMode: 'left',
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

.editor-param {
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.editor-param-input {
  width: 40px;
  margin-left: 5px;
}

.vxp-button {
  padding: unset;
  padding-left: 5px;
  padding-right: 5px;
  min-width: unset;
}

.demo-panel {
  padding: 10px;
  background-color: lightgray;
  border: #3c495e;
  border-radius: 5px;
  margin: 10px;

  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>
