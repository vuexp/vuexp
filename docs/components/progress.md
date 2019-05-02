---
sidebarDepth: 0
---

# Progress
  
`<Progress>` component can be used as an indicator when submitting forms, loading images or similar ongoing processes.

## Live Demo
<DocExampleBox codeBox="">

```html
   <Progress
      :value="currentProgress"
      @valueChange="progressChange"
      :maxValue="maxValueProgress"
      style="margin-bottom:2em;"
    />
```

```js 
progressChange({ eventName, oldValue, value }) {
    if (this.currentProgress > this.maxValueInputAsNumber) return;
    this.eventLog = `${eventName} ${oldValue} to ${value}`;
},
incrementValue() {
    const maxValErr = this.maxValueInputAsNumber <= this.incrementAsNumber + this.currentProgress;
    if(maxValErr){
    alert `Incremented value is greater than max value`;
    return;
    }
    if (this.currentProgress >= this.maxValueInputAsNumber){
    return;
    } 
    this.currentProgress += this.incrementAsNumber;
},
decrementValue() {
    if (this.currentProgress <= 0) return;
    this.currentProgress -= this.incrementAsNumber;
},
```
<ProgressLiveDemo />
</DocExampleBox>


## Example Usages
<DocExampleBox codeBox="">
<ProgressDoc />
</DocExampleBox>


## Props

| Name     | Type   | Default | Web | Mobile | Description                              |
|----------|--------|---------|-----|--------|------------------------------------------|
| value    | Number | 0       | ✔   | ✔      | Value of the current progress of the bar |
| maxValue | Number | 100     | ✔   | ✔      | Max value which component can achieve    |

## Events

| Name        | Web | Mobile | Description                                                                                                                        |
|-------------|-----|--------|------------------------------------------------------------------------------------------------------------------------------------|
| valueChange | ✔   | ✔      | The Event emitted when value is changed, emits: `{value:'New Value', oldValue: 'Old Value', eventName: 'valueChange'}` |
