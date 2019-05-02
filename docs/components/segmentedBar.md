
# SegmentedBar

`<SegmentedBar>` is a UI bar component that displays a set of buttons for discrete selection. Can show text or images.

## Live Demo

<DocExampleBox>

```html
  <SegmentedBar @selectedIndexChanged="onIdxChanged($event)" v-model="selectedIndex" style="padding-bottom:2em;">
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
```

```js
export default {
  name: 'SegmentedBarLiveDemo',
  components: { SegmentedBar, SegmentedBarItem, StackLayout, TextField, Label },
  data() {
    return {
      segments: [{ title: 'Segment 1' }, { title: 'Segment 2' }, { title: 'Segment 3' }],
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
      this.selectedIndex = evt;
    },
  },
};

```

<SegmentedBarLiveDemo />
</DocExampleBox>



## Example Usages
<DocExampleBox>
<SegmentedBarDoc></SegmentedBarDoc>
</DocExampleBox>

## Props

| Name          | Type            | Default | Web | Mobile | Description                                                      |
|---------------|-----------------|---------|-----|--------|------------------------------------------------------------------|
| items         | Array`<String>` |         | ✔   | ✔      | 'title' field in the array is rendered as title of segmented bar |
| selectedIndex | Number          |         | ✔   | ✔      | ---                                                              |

## Events

| Name                | Type   | Web | Mobile | Description                                    |
|---------------------|--------|-----|--------|------------------------------------------------|
| selectedIndexChange | Number | ✔   | ✔      | Outputs the index of selected segment bar item |
