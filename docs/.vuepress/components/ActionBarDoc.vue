<template>
  <StackLayout>
    <ActionBar title="My App">
      <ActionItem @tap="onTapShare($event)" webIcon="fa fa-share"/>
      <ActionItem @tap="onTapDelete($event)" webIcon="fa fa-remove"/>
    </ActionBar>
    <ActionBar style="margin-top:15px">
      <StackLayout orientation="horizontal">
        <Label text="VueXP" verticalAlignment="center"/>
        <Label text="Cross Platform" verticalAlignment="center"/>
      </StackLayout>
    </ActionBar>
    <ActionBar title="VueXP" style="margin-top:15px">
      <NavigationButton text="Go back" @tap="goBack($event)" webIcon="fa fa-arrow-left"/>
    </ActionBar>
  </StackLayout>
</template>

<script>
import Label from '../../../src/core/components/Label/Label';
import ActionBar from '../../../src/core/components/ActionBar/ActionBar';
import NavigationButton from '../../../src/core/components/NavigationButton/NavigationButton';
import ActionItem from '../../../src/core/components/ActionItem/ActionItem';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'ActionBarDoc',
  components: {
    Label,
    StackLayout,
    ActionBar,
    ActionItem,
    NavigationButton,
  },
  methods: {
    onTapShare(event) {
      event.stopImmediatePropagation();
      alert('Share button clicked.');
    },
    onTapDelete(event) {
      event.stopImmediatePropagation();
      alert('Delete button clicked.');
    },
    goBack(event) {
      event.stopImmediatePropagation();
      alert('Back button clicked.');
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('/fonts/fontawesome.min.css');
</style>
