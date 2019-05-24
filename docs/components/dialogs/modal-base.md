---
sidebarDepth: 0
---

# ModalBase

This is an overview of the most common usage of ModalBase.

The `$showModal` method shows template contains components. Use it to show information that do not require an action from the user.

## Live Demo
<DocExampleBox :liveDemoMode="true">

```html
  <Button text="Show Modal Base" width="200" @tap="showModalBase" />
```

```js
   showAlertBase: function() {
      $showModal({title: "Your title", message: "Your message", okButtonText: "Your OK button text"}).then(() => {
        console.log("Modal Base closed.");
      });
    }
```

<ModalBaseDoc />
</DocExampleBox>

## Props

| Name     | Type    | Default | Web | Mobile | Desctiption |
| -------- | ------- | ------- | --- | ------ |------|
| fullscreen | Boolean | `false` | ✔   | ✔      |Sets the size of dialog component|

