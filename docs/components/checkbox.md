---
sidebarDepth: 0
---

# Checkbox

This is an overview of the most common usage of `<Checkbox>`.

## Live Demo
 
<DocExampleBox>
```html
  <FlexboxLayout class="checkbox-doc-container" flexDirection="column">
    <FlexboxLayout class="checkbox-doc-container__flexboxLayout" flexDirection="row" justifyContent="space-around">
      <FlexboxLayout >
        <Checkbox class="checkbox-doc-container__flexboxLayout__checkbox" v-model="checked" :disabled="disabled" primary />
        <Label text="Primary" width="100" />
      </FlexboxLayout>
      <FlexboxLayout>
        <Checkbox class="checkbox-doc-container__flexboxLayout__checkbox" v-model="checked" :disabled="disabled" secondary />
        <Label text="Secondary " width="100" />
      </FlexboxLayout>
      <FlexboxLayout>
        <Checkbox class="checkbox-doc-container__flexboxLayout__checkbox" v-model="checked" :disabled="disabled" alert />
        <Label text="Alert " width="100" />
      </FlexboxLayout>
  </FlexboxLayout>
    <FlexboxLayout flexDirection="row" class="checkbox-doc-container__seperator" >
      <Label fontAttributes="Bold" class="checkbox-doc-container__seperator__label"  text="Configuration"/>
      <hr class="checkbox-doc-container__seperator__hr"  width="75%" />
    </FlexboxLayout >

    <FlexboxLayout class="checkbox-doc-container__config" justifyContent="start">
      <Label text="Disable State: " width="100" />
      <Checkbox class="checkbox-doc-container__config__checkbox" primary @change="disabled = !disabled" />
    </FlexboxLayout>

  </FlexboxLayout>
```

```scss
.checkbox-doc-container {
  margin-top: 35px;
  align-items: center;
  &__flexboxLayout {
    &__checkbox {
      top: 3px;
      right: 5px;
    }
  }
  &__seperator {
    margin-top: 35px;
    width: 100%;
    &__label {
      opacity: 0.9;
      font-weight: bold;
    }
    &__hr {
      border-top: 2px solid black;
      opacity: 0.6;
      margin-top: 12px;
    }
  }
  &__config {
    margin-top: 25px;
    &__checkbox {
      top: 3px;
    }
  }
}
```

<VxpCheckboxDoc />
</DocExampleBox>

## Props

| Name     | Type    | Default | Web | Mobile | Desctiption |
| -------- | ------- | ------- | --- | ------ |------|
| visible  | Boolean | `true`  | ✔   | ✔      |Sets the visibility of the checkbox.|
| disable  | Boolean | `false` | ✔   | ✔      |Sets the disability of the checkbox.|

## Events

| Name | Web | Mobile | Description |
| ---- | --- | ------ |------|
| onTap| ✔   | ✔      |Emitted when the checkbox is tapped.|