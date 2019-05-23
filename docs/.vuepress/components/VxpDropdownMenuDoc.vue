<template>
  <StackLayout>
    <VxpDropdownMenu id="dropdownmenu__title__label" :iconClass="iconClass + ' ' + dropdownIcon" :items="items" :title="dropdownTitle" :disabled="dropdownDisable"></VxpDropdownMenu>
    <FlexboxLayout flexDirection="row" class="vxp-doc-container__separator">
      <Label class="vxp-doc-container__separator__label" fontAttributes="Bold" text="Configuration" />
      <hr class="vxp-doc-container__separator__hr" width="65%" />
    </FlexboxLayout>
    <StackLayout class="prop-container">
      <Label text="Icon Selections"></Label>
      <StackLayout style="margin-top:15px" orientation="horizontal">
        <StackLayout class="form-group">
          <select style="height: 1.9rem;" id="dropdownmenu__icon__select" v-model="dropdownIcon">
            <option v-for="icon in icons" v-bind:value="icon">{{ icon }}</option>
          </select>
          <Label class="control-label" text="Dropdown Menu Icon"></Label>
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group">
          <select style="height: 1.9rem;" id="dropdownmenuitem1__icon__select" v-model="items[0].icon">
            <option v-for="icon in icons" v-bind:value="icon">{{ icon }}</option>
          </select>
          <Label class="control-label" text="First Item Icon"></Label>
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group">
          <select style="height: 1.9rem;" id="dropdownmenuitem2__icon__select" v-model="items[1].icon">
            <option v-for="icon in icons" v-bind:value="icon">{{ icon }}</option>
          </select>
          <Label class="control-label" text="Second Item Icon"></Label>
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group">
          <select style="height: 1.9rem;" id="dropdownmenuitem3__icon__select" v-model="items[2].icon">
            <option v-for="icon in icons" v-bind:value="icon">{{ icon }}</option>
          </select>
          <Label class="control-label" text="Third Item Icon"></Label>
          <i class="bar"></i>
        </StackLayout>
      </StackLayout>
    </StackLayout>
    <StackLayout class="prop-container">
      <Label text="Title Change"></Label>
      <StackLayout style="margin-top:15px">
        <StackLayout class="form-group">
          <TextField id="dropdownmenu__title__input" type="text" v-model="dropdownTitle" placeholder="Enter title..."></TextField>
          <Label class="control-label" text="Dropdown Menu Title"></Label>
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group">
          <TextField id="dropdownmenuitem1__title__input" type="text" v-model="items[0].title" placeholder="Enter title..."></TextField>
          <Label class="control-label" text="First Item Title"></Label>
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group">
          <TextField id="dropdownmenuitem2__title__input" type="text" v-model="items[1].title" placeholder="Enter title..."></TextField>
          <Label class="control-label" text="Second Item Title"></Label>
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group">
          <TextField id="dropdownmenuitem3__title__input" type="text" v-model="items[2].title" placeholder="Enter title..."></TextField>
          <Label class="control-label" text="Third Item Title"></Label>
          <i class="bar"></i>
        </StackLayout>
      </StackLayout>
    </StackLayout>
    <StackLayout class="prop-container">
      <Label text="Events"></Label>
      <StackLayout style="margin-top:15px">
        <StackLayout class="form-group" orientation="horizontal">
          <Label text="Dropdown Menu Disable State: " width="230" />
          <VxpCheckbox id="dropdownmenu__disabled__checkbox" class="nubutton-doc-container__config__checkbox" :checked="dropdownDisable" primary @change="dropdownDisable = !dropdownDisable" />
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group" orientation="horizontal">
          <Label text="Dropdown Menu Disable Status:" width="230" />
          <Label id="dropdownmenu__disabled__label" :text="dropdownDisable" />
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>
<script>
import VxpDropdownMenu from '../../../src/components/menus/VxpDropdownMenu';
import StackLayout from '../../../src/layouts/StackLayout';
import Label from '../../../src/core/components/Label/Label';
import TextField from "../../../src/core/components/TextField/TextField";
import FlexboxLayout from "../../../src/layouts/FlexboxLayout";
import VxpCheckbox from "../../../src/components/VxpCheckbox";

export default {
  name: 'VxpDropdownMenuDoc',
  components: {
    StackLayout,
    FlexboxLayout,
    VxpDropdownMenu,
    Label,
    TextField,
    VxpCheckbox,
  },
  data() {
    return {
      dropdownTitle: 'Dropdown',
      dropdownIcon: 'fa-pencil',
      dropdownDisable: false,
      iconClass: 'fa',
      items: [
        { icon: 'fa-trash', title: 'Delete Selected Lead(s)', iconClass: 'fa' },
        { icon: 'fa-plus-circle', title: 'Clone Selected Lead(s)', iconClass: 'fa' },
        { icon: 'fa-calendar', title: 'Schedule Appointment', iconClass: 'fa' },
      ],
      icons: [
        'fa-trash',
        'fa-plus-circle',
        'fa-calendar',
        'fa-pencil',
        'fa-share',
        'fa-times',
        'fa-refresh',
        'fa-smile-o',
        'fa-user-circle-o',
        'fa-exclamation-triangle',
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import url('/fonts/fontawesome.min.css');
@import url('/custom-input.css');
.vxp-doc-container__separator{
  margin-top: 15px;
  width: 100%;
}
.vxp-doc-container__separator__label{
  margin-left: 20px;
  opacity: 0.9;
  font-weight: bold;
}
.vxp-doc-container__separator__hr{
  border-top: 2px solid black;
  opacity: 0.6;
  margin-top: 12px;
}
.prop-container {
  margin-top: 25px;
  background: rgb(243, 243, 243);
  padding: 1rem;

  .child-row {
    background: #e3e4e4;
    margin-bottom: 1rem;
    padding: 1rem;

    .remove-child-btn {
      padding: 0px;
      height: 2rem;
      width: 2rem;
      min-width: 2rem;
      margin-top: 1rem;
    }
    .child-label {
      min-width: 35%;
      margin-top: 1.5rem;
    }
  }
}
.p-l-1 {
  padding-left: 1rem;
}

.p-l-2 {
  padding-left: 2rem !important;
}
.form-group {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
