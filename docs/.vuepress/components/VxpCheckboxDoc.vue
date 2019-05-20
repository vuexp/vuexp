<template>
  <StackLayout class="demo-panel">
      <FlexboxLayout class="checkbox-doc-container__config" justifyContent="start">
      <Label text="Status:" id="checkbox_status_label" width="100"/>
      <Label :text="checked ? 'Checked' : 'Unchecked'" id=" checkbox_status_label_result" width="100"/>
    </FlexboxLayout>
    <FlexboxLayout class="checkbox-doc-container__config" justifyContent="start">
      <Label text="Disable : " id="checkbox_enabled_label" width="100"/>
      <VxpCheckbox
        class="checkbox-doc-container__config__checkbox"
        id="checkbox_enabled_selectbox"
        @tap="onMainCheck"
        primary
        @change="disabled = !disabled"
      />
       <Label :text="disabled ? 'Disabled' : 'Enabled'" class="label__margin_left" id="checkbox_enabled_label_result" width="100"/>
    </FlexboxLayout>
     <StackLayout style="margin-top:20px" orientation="horizontal" >
      <Label text="Rendered Result: " class="demo-panel__title" style="margin-right:20px;" />
       <FlexboxLayout
      class="checkbox-doc-container__flexboxLayout"
      flexDirection="row"
      justifyContent="space-around"
    >
      <FlexboxLayout>
        <VxpCheckbox
          class="checkbox-doc-container__flexboxLayout__checkbox"
          id="checkbox_component"
          @tap="onMainCheck"
          v-model="checked"
          :disabled="disabled"
          primary
        />
      </FlexboxLayout>
    </FlexboxLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import VxpCheckbox from '../../../src/components/VxpCheckbox';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import StackLayout from '../../../src/layouts/StackLayout';
export default {
  name: "CheckboxDoc",
  components: {
    FlexboxLayout,
    Label,
    VxpCheckbox,
    StackLayout,
  },
  data() {
    return {
      disabled: false,
      checked : false,
    };
  },
   methods: {
    onMainCheck() {
        this.checked=!checked;
    },
    disableCheck() {
        this.disabled=!disabled;
    }
  },
};
</script>

<style lang="scss">
@import '../../../src/themes/themes';
@import '../../../src/assets/styles/helpers';
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
.label {
   &__margin_left {
   margin-left: 10px;
  }
}
.demo-panel {
  padding: 10px;
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
