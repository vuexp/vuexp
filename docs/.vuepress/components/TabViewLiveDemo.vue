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
        <StackLayout orientation="horizontal" class="flex m-t-10">
          <Label id="tabView__id__label" :for="`tabView__id__input__${selectedIndex}`" text="ID:" />
          <TextField v-model="tabs[selectedIndex].id" :id="`tabView__id__input__${selectedIndex}`" hint="ID of selected tab" />
        </StackLayout>
        <StackLayout orientation="horizontal" class="flex m-t-10">
          <Label id="tabView__title__label" :for="`tabView__title__input__${selectedIndex}`" text="Title:" />
          <TextField v-model="tabs[selectedIndex].title" :id="`tabView__title__input__${selectedIndex}`" hint="title of selected tab" />
        </StackLayout>
        <StackLayout orientation="horizontal" class="flex m-t-10">
          <Label id="tabView__webIcon__label" for="tabView__webIcon__input" text="Web icon" />
          <select id="tabView__webIcon__input" v-model="tabs[selectedIndex].webIcon">
            <option v-for="icon in icons" v-bind:value="icon">{{ icon }}</option>
          </select>
        </StackLayout>
        <StackLayout orientation="horizontal" class="flex m-t-10">
          <Label text="Tab Text Color:" for="tabView__tabTextColor__input" id="tabView__tabTextColor__label" />
          <select id="tabView__tabTextColor__input" style="margin-left: 5px" class="form-input" v-model="tabTextColor">
            <option disabled value>Color</option>
            <option v-for="color in colors" :key="color.value" :value="color.value">{{ color.label }}</option>
          </select>
        </StackLayout>
        <StackLayout orientation="horizontal" class="flex m-t-10">
          <Label text="Tab Background Color:" id="tabView__tabBackgroundColor__label" for="tabView__tabBackgroundColor__input" />
          <select id="tabView__tabBackgroundColor__input" style="margin-left: 5px" class="form-input" v-model="tabBackgroundColor">
            <option disabled value>Color</option>
            <option v-for="color in colors" :key="color.value" :value="color.value">{{ color.label }}</option>
          </select>
        </StackLayout>
        <StackLayout orientation="horizontal" class="flex m-t-10">
          <Label text="Selected Tab Text Color:" id="tabView__selectedTabTextColor__label" for="tabView__selectedTabTextColor__input" />
          <select id="tabView__selectedTabTextColor__input" style="margin-left: 5px" class="form-input" v-model="selectedTabTextColor">
            <option disabled value>Color</option>
            <option v-for="color in colors" :key="color.value" :value="color.value">{{ color.label }}</option>
          </select>
        </StackLayout>
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
import PredefinedColors from '../../shared/colors';

export default {
  name: 'TabViewLiveDemo',
  components: { Label, TabViewItem, TabView, StackLayout, TextField },
  data() {
    return {
      selectedIndex: 0,
      tabTextColor: '',
      tabBackgroundColor: '',
      selectedTabTextColor: '',
      tabs: [
        {
          id: '1',
          title: 'Tab 1',
          webIcon: 'fa fa-smile-o',
          innerText: 'Content for Tab 1',
        },
        {
          id: '2',
          title: 'Tab 2',
          webIcon: 'fa fa-user-circle-o',
          innerText: 'Content for Tab 2',
        },
        {
          id: '3',
          title: 'Tab 3',
          webIcon: 'fa fa-exclamation-triangle',
          innerText: 'Content for Tab 3',
        },
      ],
      icons: ['', 'fa fa-smile-o', 'fa fa-user-circle-o', 'fa fa-exclamation-triangle'],
      colors: PredefinedColors,
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
