<template>
  <StackLayout style="margin-top:20px" class="demo-panel">
    <TabView class="container" @selectedIndexChanged="changed">
      <TabViewItem title="La Liga" id="la-liga">
        <StackLayout>
          <Label text="Barcelona" />
          <Label text="Atletico Madrid" />
          <Label text="Real Madrid" />
        </StackLayout>
      </TabViewItem>
      <TabViewItem title="Premier League" id="premier">
        <StackLayout>
          <Label text="Liverpool" />
          <Label text="Man. City" />
          <Label text="Chelsea" />
        </StackLayout>
      </TabViewItem>
    </TabView>
  </StackLayout>
</template>

<script>
import Label from '../../../src/core/components/Label/Label';
import TabViewItem from '../../../src/core/components/TabViewItem/TabViewItem';
import TabView from '../../../src/core/components/TabView/TabView';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'TabViewDoc',
  components: { Label, TabViewItem, TabView, StackLayout },
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
