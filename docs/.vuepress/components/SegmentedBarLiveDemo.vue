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
      <StackLayout orientation="horizontal" class="editor-param">
        <Label class="editor-param-title" text="Color: "/>
        <select id="segmentedBar__selectedBackgroundColor__select" v-model="selectedTabColor">
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
      <Label :text="selectedIndexTitle" id="segmentedBar__selectedIndex__label" class="m-b-10"></Label>

      <StackLayout
        v-for="(segment, index) in segments"
        :key="index"
        orientation="horizontal"
        class="m-b-10"
      >
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
          class="m-l-10"
          id="segmentedBar__items__increment"
        ></Button>
        <Button
          text="-"
          @tap="removeItem(index)"
          v-show="segments.length > 1"
          class="m-l-10"
          id="segmentedBar__items__decrement"
        ></Button>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import SegmentedBar from '../../../src/core/components/SegmentedBar/SegmentedBar';
import SegmentedBarItem from '../../../src/core/components/SegmentedBarItem/SegmentedBarItem';
import TextField from '../../../src/core/components/TextField/TextField';
import Button from '../../../src/core/components/Button/Button';
import Label from '../../../src/core/components/Label/Label';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'SegmentedBarLiveDemo',
  components: { SegmentedBar, SegmentedBarItem, StackLayout, TextField, Label, Button },
  data() {
    return {
      segments: [{ name: 'Segment 1' }, { name: 'Segment 2' }, { name: 'Segment 3' }],
      selectedIndex: 0,
      selectedTabColor: 'red',
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
}

button {
  padding: 10px 20px;
  font-weight: lighter;
}

.m-l-10 {
  margin-left: 10px;
}
.m-b-10 {
  margin-bottom: 10px;
}
</style>
