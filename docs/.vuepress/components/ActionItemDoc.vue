<template>
  <StackLayout>
    <ActionBar title="My App">
      <ActionItem @tap="onTapShare($event)" :webIcon="'fa ' + selectedShareIcon"/>
      <ActionItem @tap="onTapDelete($event)" :webIcon="'fa ' + selectedDeleteIcon"/>
    </ActionBar>
    <StackLayout class="prop-container">
      <Label text="Properties"></Label>
      <StackLayout style="margin-top:75px" class="form-group">
        <select id="actionitem__shareicon__select" v-model="selectedShareIcon">
          <option v-for="icon in shareIcons" v-bind:value="icon">{{ icon }}</option>
        </select>
        <Label class="control-label" text="Change Share Icon"></Label>
        <i class="bar"></i>
      </StackLayout>
      <StackLayout style="margin-top:15px" class="form-group">
        <select id="actionitem__deleteicon__select" v-model="selectedDeleteIcon">
          <option v-for="(icon, index) in deleteIcons" v-bind:value="icon" :key="index">{{ icon }}</option>
        </select>
        <Label class="control-label" text="Change Delete Icon"></Label>
        <i class="bar"></i>
      </StackLayout>
      <Label v-if="shareClickedVisible" id="actionitem__shareicon__label" text="Share Icon Clicked"></Label>
      <Label
        v-if="deleteClickedVisible"
        id="actionitem__deleteicon__label"
        text="Delete Icon Clicked"
      ></Label>
    </StackLayout>
  </StackLayout>
</template>

<script>
import ActionBar from '../../../src/core/components/ActionBar/ActionBar';
import ActionItem from '../../../src/core/components/ActionItem/ActionItem';
import StackLayout from '../../../src/layouts/StackLayout';
import Label from '../../../src/core/components/Label/Label';

export default {
  name: 'ActionItemDoc',
  components: {
    StackLayout,
    ActionBar,
    ActionItem,
    Label,
  },
  data() {
    return {
      shareIcons: ['fa-share', 'fa-share-alt', 'fa-share-square-o'],
      selectedShareIcon: 'fa-share',
      deleteIcons: ['fa-close', 'fa-window-close', 'fa-window-close-o'],
      selectedDeleteIcon: 'fa-close',
      shareClickedVisible: false,
      deleteClickedVisible: false,
    };
  },
  methods: {
    onTapShare(event) {
      event.stopImmediatePropagation();
      this.shareClickedVisible = true;
      this.deleteClickedVisible = false;
    },
    onTapDelete(event) {
      event.stopImmediatePropagation();
      this.shareClickedVisible = false;
      this.deleteClickedVisible = true;
    },
  },
};
</script>

<style lang="scss">
@import url('/fonts/fontawesome.min.css');
@import url('/custom-input.css');

.prop-container {
  margin-top: 50px;
  background: rgb(243, 243, 243);
  padding: 1rem;
}
</style>
