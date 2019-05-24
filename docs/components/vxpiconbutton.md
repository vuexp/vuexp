# VxpIconButton

Circular icon button.

<DocExampleBox :liveDemoMode="true">

```html
  <FlexboxLayout class="nubutton-doc-container" flexDirection="column">
    <FlexboxLayout
      width="250"
      class="nubutton-doc-container__flexboxLayout"
      flexDirection="row"
      justifyContent="space-around"
    >
      <IconButton
        :isEnabled="isEnabled"
        @tap="increment"
        font="nuicon"
        icon="nuicon-basket"
        size="25"
        primary
      />
      <IconButton
        :isEnabled="isEnabled"
        @tap="increment"
        font="nuicon"
        icon="nuicon-basket"
        secondary
      />
      <IconButton
        :isEnabled="isEnabled"
        @tap="increment"
        font="nuicon"
        icon="nuicon-basket"
        size="50"
        alert
      />
    </FlexboxLayout>

    <FlexboxLayout class="nubutton-doc-container__label">
      <Label text="Click count:" width="100"/>
      <Label :text="counter.toString()"/>
    </FlexboxLayout>

    <FlexboxLayout flexDirection="row" class="nubutton-doc-container__separator">
      <Label
        class="nubutton-doc-container__separator__label"
        fontAttributes="Bold"
        text="Configuration"
      />
      <hr class="nubutton-doc-container__separator__hr" width="75%">
    </FlexboxLayout>

    <FlexboxLayout class="nubutton-doc-container__config" justifyContent="start">
      <Label text="Disable State: " width="100"/>
      <Checkbox
        class="nubutton-doc-container__config__checkbox"
        primary
        @change="isEnabled = !isEnabled"
      />
    </FlexboxLayout>

  </FlexboxLayout>
```

```js
increment() {
  this.counter++;
}
```

```scss
.nubutton-doc-container {
  margin-top: 25px;
  margin-bottom: 25px;
  align-items: center;
  &__flexboxLayout {
    margin-bottom: 15px;
    align-items: center;
  }
  &__label {
    top: 3px;
    right: 5px;
  }
  &__separator {
    margin-top: 15px;
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

<VxpIconButtonDoc />
</DocExampleBox>

### Props

| Name      | Type           | Default | Web | Mobile | Description                               |
| --------- | -------------- | ------- | --- | ------ | ----------------------------------------- |
| icon      | String         | ` `      | ✔   | ✔      | Sets the icon class name.                 |
| size      | String, Number | `37`      | ✔   | ✔      | Sets Icon size.                           |
| isEnabled | Boolean        | `true`  | ✔   | ✔      | Sets the VxpIconButton enable or disable. |

### Events

| Name | Web | Mobile | Description                               |
| ---- | --- | ------ | ----------------------------------------- |
| tap  | ✔   | ✔      | Emitted when the VxpIconButton is tapped. |

#### Note: The following components to be used from 'nativescript-vue-web'

| Name   |
| ------ |
| Button |
