<template>
  <StackLayout>
    <StackLayout style="margin-top:20px" class="demo-panel">
      <Label text="Live example" class="demo-panel__title" />
      <TabView
        class="container"
        :selectedIndex="selectedIndex"
        @selectedIndexChanged="changed"
        :tabTextColor="tabTextColor"
        :tabBackgroundColor="tabBackgroundColor"
        :selectedTabTextColor="selectedTabTextColor"
      >
        <TabViewItem :title="tab.title" :webIcon="tab.webIcon" :id="tab.id" v-for="(tab, i) in tabs" :key="i">
          <Label :text="tab.innerText" />
        </TabViewItem>
      </TabView>
    </StackLayout>

    <StackLayout style="margin-top:20px" class="demo-panel tabView-wrapper">
      <Label text="Manage props" class="demo-panel__title" />
      <Label :text="selectedIndexComputed" />
      <StackLayout>
        <Label text="ID:" />
        <TextField v-model="tabs[selectedIndex].id" :id="`tabView__id__input__${selectedIndex}`" hint="ID of selected tab" />
        <Label text="Title:" />
        <TextField v-model="tabs[selectedIndex].title" :id="`tabView__title__input__${selectedIndex}`" hint="title of selected tab" />
        <Label text="Web icon" />
        <select v-model="tabs[selectedIndex].webIcon">
          <option v-for="icon in icons" v-bind:value="icon">{{ icon }}</option>
        </select>
        <Label text="Tab Text Color" />
        <input type="color" id="tabView__tabTextColor__input" name="tabTextColor" :value="tabTextColor" @change="changeTabTextColor($event)" />
        <Label text="Tab Background Color" />
        <input
          type="color"
          id="tabView__tabBackgroundColor__input"
          name="tabBackgroundColor"
          :value="tabBackgroundColor"
          @change="changeTabBackgroundColor($event)"
        />
        <Label text="Selected Tab Text Color" />
        <input
          type="color"
          id="tabView__selectedTabTextColor__input"
          name="selectedTabTextColor"
          :value="selectedTabTextColor"
          @change="changeSelectedTabTextColor($event)"
        />
        <Label text="Note: You should press ENTER, after select color" />
      </StackLayout>
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
  name: 'TabViewLiveDemo',
  components: { Label, TabViewItem, TabView, StackLayout, TextField },
  data() {
    return {
      selectedIndex: 2,
      tabTextColor: '#000000',
      tabBackgroundColor: '#f9f9f9',
      selectedTabTextColor: '#000000',
      tabs: [
        {
          id: '1',
          title: 'Tab 1',
          webIcon: 'fa fa-laugh',
          innerText: 'Content for Tab 1',
        },
        {
          id: '2',
          title: 'Tab 2',
          webIcon: 'fa fa-laugh-wink',
          innerText: 'Content for Tab 2',
        },
        {
          id: '3',
          title: 'Tab 3',
          webIcon: 'fa fa-smile',
          innerText: 'Content for Tab 3',
        },
      ],
      icons: ['fa fa-laugh', 'fa fa-laugh-wink', 'fa fa-smile'],
    };
  },
  computed: {
    selectedIndexComputed() {
      return `Selected Index: ${this.selectedIndex}`;
    },
  },
  methods: {
    changed({ index }) {
      this.selectedIndex = index;
    },
    titleChanged(evt, i) {
      this.tabs[i].title = evt;
    },
    changeTabTextColor(e) {
      this.tabTextColor = e.target.value;
    },
    changeTabBackgroundColor(e) {
      this.tabBackgroundColor = e.target.value;
    },
    changeSelectedTabTextColor(e) {
      this.selectedTabTextColor = e.target.value;
    },
    changeTabWebIcon(e, i) {
      console.log(e, i);
    },
  },
};
</script>

<style scoped lang="scss">
@import url('/fonts/fontawesome.min.css');

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
.tabView-wrapper * {
  margin: 3px;
}
</style>
