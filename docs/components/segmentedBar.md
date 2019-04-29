---
sidebarDepth: 0
---

# SegmentedBar

`<SegmentedBar>` is a UI bar component that displays a set of buttons for discrete selection. Can show text or images.

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
  name: 'SegmentedBarDoc',
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

<SegmentedBarDoc />
</DocExampleBox>

`<SegmentedBar>` provides two-way data binding using v-model. The 'title' field is rendered as segmented bar item's title.

```html
<SegmentedBar v-model="selectedIndex" :items="items" @selectedIndexChanged="changed" />
```

## Props

| Name          | Type            | Default | Web | Mobile | Description                                                      |
|---------------|-----------------|---------|-----|--------|------------------------------------------------------------------|
| items         | Array`<String>` |         | ✔   | ✔      | 'title' field in the array is rendered as title of segmented bar |
| selectedIndex | Number          |         | ✔   | ✔      | ---                                                              |

## Events

| Name                | Type   | Web | Mobile |
|---------------------|--------|-----|--------|
| selectedIndexChange | Number | ✔   | ✔      |

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/segmented-bar/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_)