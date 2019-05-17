<template>
  <FlexboxLayout class="nubutton-doc-container" flexDirection="column">
    <FlexboxLayout width="250" class="nubutton-doc-container__flexboxLayout" flexDirection="row" justifyContent="space-around">
      <IconButton :isEnabled="isEnabled" @tap="increment" iconName="fa" :icon="buttonIcon" size="25" primary />
      <IconButton :isEnabled="isEnabled" @tap="increment" iconName="fa" :icon="buttonIcon" secondary />
      <IconButton :isEnabled="isEnabled" @tap="increment" iconName="fa" :icon="buttonIcon" size="50" alert />
    </FlexboxLayout>

    <FlexboxLayout class="nubutton-doc-container__label">
      <Label text="Click count:" width="100" />
      <Label :text="counter.toString()" />
    </FlexboxLayout>

    <FlexboxLayout flexDirection="row" class="nubutton-doc-container__separator">
      <Label class="nubutton-doc-container__separator__label" fontAttributes="Bold" text="Configuration" />
      <hr class="nubutton-doc-container__separator__hr" width="75%" />
    </FlexboxLayout>

    <FlexboxLayout class="nubutton-doc-container__config" justifyContent="start">
      <Label text="Disable State: " width="100" />
      <Switcher class="nubutton-doc-container__config__checkbox" primary @checkedChange="isEnabled = !isEnabled" />
      <Label text="Font: " />
      <Label text="Icon: " />
      <select v-model="buttonIcon">
        <option v-for="icon in icons" :value="icon">{{ icon }}</option>
      </select>
      <Label text="Size: " />
    </FlexboxLayout>
  </FlexboxLayout>
</template>

<script>
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import IconButton from '../../../src/components/IconButton';
import Label from '../../../src/components/Label';
import Switcher from '../../../src/components/Switcher';

export default {
  name: 'IconButtonDoc',
  data() {
    return {
      counter: 0,
      isEnabled: true,
      buttonIcon: 'fa fa-exclamation-triangle',
      icons: ['', 'fa fa-smile-o', 'fa fa-user-circle-o', 'fa fa-exclamation-triangle'],
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
  components: {
    Switcher,
    FlexboxLayout,
    IconButton,
    Label,
  },
};
</script>

<style lang="scss">
@import url('/fonts/fontawesome.min.css');

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
</style>
