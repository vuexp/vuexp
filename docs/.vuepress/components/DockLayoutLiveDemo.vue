<template>
  <StackLayout>
    <StackLayout orientation="horizontal" style="margin-bottom:5px">
      <Label text="Stretch Last child: "/>
      <input id="docklayout_stretchlastchild_cb" type="checkbox" v-model="stretchLastChildSelected">
    </StackLayout>

    <StackLayout orientation="horizontal">
      <StackLayout orientation="horizontal" class="editor-param">
        <Label class="editor-param-title" text="Text: "/>
        <input id="docklayout_childname_input" class="editor-param-input" type="text" v-model="dockChildText">
      </StackLayout>
      <StackLayout orientation="horizontal" class="editor-param">
        <Label class="editor-param-title"  text="Width: "/>
        <input id="docklayout_childtwidth_input" class="editor-param-input" type="text" v-model="dockChildWidth">
      </StackLayout>
      <StackLayout orientation="horizontal" class="editor-param">
        <Label class="editor-param-title"  text="Height: "/>
        <input id="docklayout_childheight_input" class="editor-param-input" type="text" v-model="dockChildHeight">
      </StackLayout>
    </StackLayout>

    <StackLayout orientation="horizontal">
      <StackLayout orientation="horizontal" class="editor-param">
        <Label class="editor-param-title"  text="Color: "/>

        <select id="docklayout_childcolor_selectbox" style="margin-left: 5px" v-model="dockChildColor">
          <option disabled value="">Color</option>
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
        <Label class="editor-param-title"  text="Dock: "/>
        <select id="docklayout_childdock_selectbox" style="margin-left: 5px" v-model="dockChildDockMode">
          <option disabled value="">Dock</option>
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
        <button id="docklayout_addchild_button" @click="addChildNode">➕Add Child</button>
      </StackLayout>
      <StackLayout class="editor-param">
        <button id="docklayout_removeallchildren_button" @click="clearDockChildList">❌Remove All Children</button>
      </StackLayout> 
      <StackLayout class="editor-param">
        <button id="docklayoutdoc-checkbox-textwrap"  @click="renderSampleSet">Render Sample Set</button>
      </StackLayout>
    </StackLayout>

    <StackLayout>
      <DockLayout :stretchLastChild="stretchLastChildSelected" class="dock">
        <Label v-for="(dockChild, index) in dockChildrenList" v-bind="dockChild" :key="'dockChild_' + interactionCounter + index"/>
      </DockLayout>
    </StackLayout>

  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import DockLayout from '../../../src/layouts/DockLayout';
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
      interactionCounter: 0, // used to make v-for-key unique
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

      this.interactionCounter++;
    },
    clearDockChildList() {
      this.dockChildrenList = [];
      this.interactionCounter++;
    },
    renderSampleSet() {
      this.interactionCounter++;

      this.dockChildrenList = [];
      this.dockChildrenList.push({ text: 'left', dock: 'left', width: 40, height: '', backgroundColor: 'gray'});
      this.dockChildrenList.push({ text: 'top', dock: 'top', width: '', height: 40, backgroundColor: 'red'});
      this.dockChildrenList.push({ text: 'right', dock: 'right', width: 40, height: '', backgroundColor: 'yellow'});
      this.dockChildrenList.push({ text: 'bottom', dock: 'bottom', width: '', height: 40, backgroundColor: 'blue'});
      this.dockChildrenList.push({ text: 'center', dock: 'center', backgroundColor: 'cyan'});
    },
  },
  components: {
    Label,
    DockLayout,
    StackLayout,
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
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.editor-param-input {
  width: 40px;
  margin-left: 5px;
}

button {
  height: 30px;
}
</style>
