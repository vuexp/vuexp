<template>
  <StackLayout style="margin-top:20px" class="demo-panel">
    <VxpAccordion id="accordion" :autoCollapse="autoCollapse" :initialExpandedItems="initialItems" @collapsed="onCollapsed" @expanded="onExpanded">
      <VxpAccordionItem title="Just a title"> </VxpAccordionItem>
      <VxpAccordionItem title="A title with content">
        <StackLayout style="margin: 50px" slot="content" orientation="horizontal">
          <VxpButton style="margin-left: 10px" text="Sample Button" />
          <VxpButton style="margin-left: 10px" text="Sample Button" />
          <VxpButton style="margin-left: 10px" text="Sample Button" />
        </StackLayout>
      </VxpAccordionItem>
      <VxpAccordionItem title="A title with content">
        <VxpLabel text-wrap slot="content" :text="labelDefaultText"/>
      </VxpAccordionItem>
      <VxpAccordionItem v-for="item in accordionItems" :key="item" :title="item">
        <VxpLabel text-wrap slot="content" :text="labelDefaultText"/>
      </VxpAccordionItem>
    </VxpAccordion>
    <StackLayout style="margin-top:20px" orientation="horizontal">
      <VxpLabel style="margin-left:10px" text="AutoCollapse:" />
      <VxpCheckbox id="accordion_autocollapse_checkbox" style="margin-left:10px" :checked="autoCollapse" @change="autoCollapse = !autoCollapse" />
      <VxpLabel style="margin-left:10px" text="isAutoCollapsed:" />
      <VxpLabel id="accordion_autocollapse_status_label" style="margin-left:10px" :text="String(autoCollapse)" />
    </StackLayout>
    <StackLayout style="margin-top:20px" orientation="horizontal">
      <VxpLabel style="margin-left:10px" text="Expanded item index:" />
      <VxpLabel id="accordion_expanded_event_label" style="margin-left:10px" :text="lastExpanded" />
    </StackLayout>
    <StackLayout style="margin-top:20px" orientation="horizontal">
      <VxpLabel style="margin-left:10px" text="Collapsed item index:" />
      <VxpLabel id="accordion_collapsed_event_label" style="margin-left:10px" :text="lastCollapsed" />
    </StackLayout>
    <StackLayout style="margin-top:20px" orientation="horizontal">
      <VxpLabel style="margin-left:10px" text="Initial Expanded Items:" />
      <VxpLabel style="margin-left:10px" :text="initialItems.toString()" />
    </StackLayout>
    <StackLayout style="margin-top:20px" orientation="horizontal">
      <VxpLabel style="margin-left:10px" text="Title:" />
      <VxpTextField id="item_title_input" v-model="itemTitle" style="margin-left:10px" />
      <VxpButton id="item_add_new" style="margin-left:10px" text="Add New Item" @tap="onButtonTap" />
    </StackLayout>
  </StackLayout>
</template>

<script>
import StackLayout from '../../../src/layouts/StackLayout';
import VxpAccordion from '../../../src/components/VxpAccordion';
import VxpTextField from '../../../src/components/VxpTextField';
import VxpButton from '../../../src/components/VxpButton';
import VxpLabel from '../../../src/components/VxpLabel';
import VxpAccordionItem from '../../../src/components/VxpAccordionItem';
import VxpCheckbox from '../../../src/components/VxpCheckbox';

export default {
  name: 'VxpAccordionDoc',
  components: { VxpCheckbox, VxpAccordion, VxpAccordionItem, StackLayout, VxpButton, VxpTextField, VxpLabel },
  data() {
    return {
      initialItems: [2, 3],
      accordionItems: [],
      itemTitle: '',
      currentIndex: 4,
      autoCollapse: false,
      lastExpanded: '',
      lastCollapsed: '',
      labelDefaultText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
  methods: {
    onButtonTap() {
      this.accordionItems.push(this.itemTitle);
      this.itemTitle = '';
      this.currentIndex++;
    },
    changed({ index }) {
      this.selectedIndex = index;
    },
    titleChanged(evt, i) {
      this.tabs[i].title = evt;
    },
    onExpanded(id) {
      this.lastExpanded = id;
    },
    onCollapsed(id) {
      this.lastCollapsed = id;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
  flex: 1;
}
.demo-panel {
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
