<template>
  <StackLayout>
    <SegmentedBar
      @selectedIndexChanged="onIdxChanged($event)"
      v-model="selectedIndex"
      style="padding-bottom:2em;"
    >
      <SegmentedBarItem v-for="(segment, index) in segments" :title="segment.name" :key="index"/>
    </SegmentedBar>
    <Label :text="selectedIndexTitle"></Label>
    <TextField
      v-for="(segment, index) in segments"
      :key="index"
      v-model="segment.name"
      hint="This is placeholder"
      :editable="true"
    />

    <!-- <SegmentedBar :items="segments"> </SegmentedBar> -->
  </StackLayout>
</template>

<script>
import SegmentedBar from '../../../src/components/SegmentedBar';
import SegmentedBarItem from '../../../src/components/SegmentedBarItem';
import TextField from '../../../src/components/TextField';
import Label from '../../../src/components/Label';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'SegmentedBarDoc',
  components: { SegmentedBar, SegmentedBarItem, StackLayout, TextField, Label },
  data() {
    return {
      segments: [{ name: 'Segment 1' }, { name: 'Segment 2' }, { name: 'Segment 3' }],
      selectedIndex: 0,
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
  },
};
</script>