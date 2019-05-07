<template>
  <StackLayout>
    <StackLayout style="margin-top:20px" class="demo-panel">
      <Label text="Live example" class="demo-panel__title"/>
      <SegmentedBar
        @selectedIndexChanged="onIdxChanged($event)"
        :selectedBackgroundColor="selectedTabColor"
        v-model="selectedIndex"
        style="padding-bottom:2em;"
      >
        <SegmentedBarItem v-for="(segment, index) in segments" :title="segment.name" :key="index"/>
      </SegmentedBar>
    </StackLayout>
    <StackLayout class="demo-panel">
      <Label text="Manage Segmented Bar Items" class="demo-panel__title"/>
      <StackLayout orientation="horizontal">
        <Label text="Selected Tab Background Color : "></Label>
        <input type="color" v-model="selectedTabColor" id="segmentedBar__selectedBackgroundColor__label"> 
      </StackLayout>
      <Label :text="selectedIndexTitle" id="segmentedBar__selectedIndex__label"></Label>

      <StackLayout v-for="(segment, index) in segments" :key="index" orientation="horizontal">
        <TextField
          :id="`segmentedBar__title__input__${index}`"
          v-model="segment.name"
          hint="This is placeholder"
          :editable="true"
        />
        <Button
          text="+"
          @tap="addItem"
          style="background=dodgerblue"
          id="segmentedBar__items__increment"
        ></Button>
        <Button
          text="-"
          @tap="removeItem(index)"
          v-show="segments.length > 1"
          id="segmentedBar__items__decrement"
        ></Button>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import SegmentedBar from '../../../src/components/SegmentedBar';
import SegmentedBarItem from '../../../src/components/SegmentedBarItem';
import TextField from '../../../src/components/TextField';
import Button from '../../../src/components/Button';
import Label from '../../../src/components/Label';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'SegmentedBarLiveDemo',
  components: { SegmentedBar, SegmentedBarItem, StackLayout, TextField, Label, Button },
  data() {
    return {
      segments: [{ name: 'Segment 1' }, { name: 'Segment 2' }, { name: 'Segment 3' }],
      selectedIndex: 0,
      selectedTabColor: '#f08d49',
    };
  },
  computed: {
    selectedIndexTitle() {
      return `Selected Index: ${this.selectedIndex}`;
    },
  },
  methods: {
    onIdxChanged(evt) {
      console.log(evt);
    },
    addItem() {
      this.segments.push({ name: 'Example Title' });
    },
    removeItem(i) {
      this.segments.splice(i, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
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
