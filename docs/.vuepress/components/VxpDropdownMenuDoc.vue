<template>
  <StackLayout>
    <VxpDropdownMenu
      id="dropdownmenu__title__label"
      :iconClass="iconClass + ' ' + dropdownIcon"
      :items="items"
      :title="dropdownTitle"
      :disabled="dropdownDisable"
      @selectedIndexChanged="onChangeIndex"
    ></VxpDropdownMenu>
    <StackLayout class="vxp-doc-container__separator">
      <hr class="vxp-doc-container__separator__hr" width="90%" />
    </StackLayout>
    <StackLayout class="prop-container">
      <VxpLabel style="font-weight: bold; font-size: large" text="Properties"></VxpLabel>
      <StackLayout style="margin-top:15px" orientation="horizontal">
        <StackLayout class="form-group">
          <TextField id="dropdownmenu__title__input" type="text" v-model="dropdownTitle" placeholder="Enter title..."></TextField>
          <VxpLabel class="control-label" text="Dropdown Menu Title"></VxpLabel>
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group" style="margin-left: 20px">
          <select style="height: 1.9rem;" id="dropdownmenu__icon__select" v-model="dropdownIcon">
            <option v-for="icon in icons" v-bind:value="icon">{{ icon }}</option>
          </select>
          <VxpLabel class="control-label" text="Dropdown Menu Icon"></VxpLabel>
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group" orientation="horizontal">
          <VxpLabel
            text="Dropdown Menu Disable State: "
            id="dropdownmenu__disable__label"
            :textWrap="true"
            style="margin-left: 20px; margin-top: -10px; width: 140px;"
          />
          <VxpCheckbox
            id="dropdownmenu__disabled__checkbox"
            class="nubutton-doc-container__config__checkbox"
            :checked="dropdownDisable"
            primary
            @change="dropdownDisable = !dropdownDisable"
          />
          <i class="bar"></i>
        </StackLayout>
      </StackLayout>
    </StackLayout>
    <StackLayout class="prop-container">
      <VxpLabel style="font-weight: bold; font-size: large" text="Configurations"></VxpLabel>
      <StackLayout style="margin-top: 25px; margin-bottom: 15px;" orientation="horizontal">
        <VxpButton id="dropdownmenu__additem__button" @tap="addItem()" text="➕ Add Dropdown Menu Item"></VxpButton>
        <VxpButton id="dropdownmenu__resetitems__button" style="margin-left: 15px;" @tap="setInitialState" text="↺ Reset Items"></VxpButton>
      </StackLayout>
      <StackLayout class="child-row" v-for="(item, index) in items" :key="index">
        <StackLayout orientation="horizontal">
          <StackLayout class="form-group">
            <TextField :id="'dropdownmenuitem__title__input__' + (index + 1)" type="text" v-model="item.title" placeholder="Enter title..."></TextField>
            <VxpLabel class="control-label" :text="index + 1 + '. ' + 'Item Title'"></VxpLabel>
            <i class="bar"></i>
          </StackLayout>
          <StackLayout class="form-group" style="margin-left: 20px">
            <select style="height: 1.9rem;" :id="'dropdownmenuitem__icon__select__' + (index + 1)" v-model="item.icon">
              <option v-for="(icon, index) in icons" v-bind:value="icon" :key="index">{{ icon }}</option>
            </select>
            <VxpLabel class="control-label" :text="index + 1 + '. ' + 'Item Icon'"></VxpLabel>
            <i class="bar"></i>
          </StackLayout>
          <StackLayout class="theme--nuweb">
            <VxpIconButton class="remove-child-btn" style="margin-left: 15px; padding: 0;" @tap="removeItem(index)" alert icon="fa fa-remove"></VxpIconButton>
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </StackLayout>
    <StackLayout class="prop-container">
      <VxpLabel style="font-weight: bold; font-size: large" text="Events"></VxpLabel>
      <StackLayout style="margin-top:15px">
        <StackLayout class="form-group" orientation="horizontal">
          <VxpLabel text="Dropdown Menu Disable Status:" :textWrap="true" style="width: 140px; margin-top: -10px;" />
          <VxpLabel id="dropdownmenu__disabled__label" :text="dropdownDisable.toString()" />
        </StackLayout>
        <StackLayout class="form-group" orientation="horizontal">
          <VxpLabel text="Selected Index:" :textWrap="true" style="width: 140px;" />
          <VxpLabel id="dropdownmenu__selectedIndex__label" :text="selectedIndex" />
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>
<script>
import VxpDropdownMenu from '../../../src/components/menus/VxpDropdownMenu';
import StackLayout from '../../../src/layouts/StackLayout';
import TextField from '../../../src/core/components/TextField/TextField';
import VxpCheckbox from '../../../src/components/VxpCheckbox';
import VxpLabel from '../../../src/components/VxpLabel';
import VxpButton from '../../../src/components/VxpButton';
import VxpIconButton from '../../../src/components/VxpIconButton';

export default {
  name: 'VxpDropdownMenuDoc',
  components: {
    VxpIconButton,
    VxpButton,
    VxpLabel,
    StackLayout,
    VxpDropdownMenu,
    TextField,
    VxpCheckbox,
  },
  data() {
    return {
      dropdownTitle: 'Dropdown',
      dropdownIcon: 'fa-pencil',
      dropdownDisable: false,
      iconClass: 'fa',
      selectedIndex: null,
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
  methods: {
    addItem() {
      this.items.push({ icon: 'fa-smile-o', title: 'Sample title ', iconClass: 'fa' });
    },
    setInitialState() {
      this.items = [
        { icon: 'fa-trash', title: 'Delete Selected Lead(s)', iconClass: 'fa' },
        { icon: 'fa-plus-circle', title: 'Clone Selected Lead(s)', iconClass: 'fa' },
        { icon: 'fa-calendar', title: 'Schedule Appointment', iconClass: 'fa' },
      ];
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    onChangeIndex(res){
      console.log(res);
      this.selectedIndex = res.index;
    }
  },
};
</script>

<style lang="scss">
@import url('/fonts/fontawesome.min.css');
@import url('/custom-input.css');
.vxp-doc-container__separator {
  margin-top: 15px;
  width: 100%;
}
.vxp-doc-container__separator__label {
  margin-left: 20px;
  opacity: 0.9;
  font-weight: bold;
}
.vxp-doc-container__separator__hr {
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
