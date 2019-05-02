<template>
  <StackLayout>
    <StackLayout style="margin-top:20px" class="demo-panel">
      <Label text="Live example" class="demo-panel__title"/>
      <TabView class="container" :selectedIndex="selectedIndex" @selectedIndexChanged="changed">
        <TabViewItem
          :title="tab.title"
          :webIcon="tab.webIcon"
          :id="tab.id"
          v-for="(tab,i) in tabs"
          :key="i"
        >
          <Label :text="tab.innerText"/>
        </TabViewItem>
      </TabView>
      {{selectedIndex}}
    </StackLayout>

    <StackLayout style="margin-top:20px" class="demo-panel">
      <Label text="Manage props" class="demo-panel__title"/>
      <StackLayout v-for="(tab, index) in tabs" :key="index" orientation="horizontal">
        <TextField
          :id="`segmentedBar__title__input__${index}`"
          v-model="tab.title"
          hint="This is placeholder"
          :editable="true"
          @input="titleChanged($event, index)"
        />
      </StackLayout>
      <!-- <StackLayout>
        <Label :text="tab.id"></Label>
        <Label :text="tab.title"></Label>
        <Label :text="tab.webIcon"></Label>
      </StackLayout> -->
    </StackLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import TabViewItem from '../../../src/components/TabViewItem';
import TabView from '../../../src/components/TabView';
import TextField from '../../../src/components/TextField';
import StackLayout from '../../../src/layouts/StackLayout';
export default {
  name: 'TabViewDoc',
  components: { Label, TabViewItem, TabView, StackLayout, TextField },
  data() {
    return {
      selectedIndex: 2,
      tabs: [
        {
          id: '1',
          title: 'Tab 1',
          webIcon: 'fa fa-eye',
          innerText: 'Content for Tab 1',
        },
        {
          id: '2',
          title: 'Tab 2',
          webIcon: 'fa fa-list',
          innerText: 'Content for Tab 2',
        },
        {
          id: '3',
          title: 'Tab 3',
          webIcon: 'fa fa-check',
          innerText: 'Content for Tab 3',
        },
      ],
    };
  },
  methods: {
    changed({ index }) {
      this.selectedIndex = index;
    },
    titleChanged(evt, i) {
      this.tabs[i].title = evt;
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