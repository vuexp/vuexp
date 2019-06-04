<template>
  <Page :actionBarHidden="actionBarHidden">
    <ActionBar title="My App" />
    <StackLayout class="page-wrapper">
      <StackLayout>
        <Label text="My Content" />
      </StackLayout>
      <StackLayout orientation="horizontal">
        <Label text="actionBarHidden:" />
        <input aria-label="actionBarHidden" type="checkbox" v-model="actionBarHidden" id="Page_actionBarHidden_input" />
      </StackLayout>
      <StackLayout orientation="horizontal">
        <Label text="Action Bar Hidden Status:" />
        <Label id="Page_actionBarHidden_label" :text="actionBarHidden" />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import StackLayout from '../../../src/layouts/StackLayout';
import Page from '../../../src/core/components/Page/Page';
import ActionBar from '../../../src/core/components/ActionBar/ActionBar';
import Label from '../../../src/core/components/Label/Label';

export default {
  name: 'PageDoc',
  data() {
    return {
      actionBarHidden: false,
    };
  },
  components: {
    StackLayout,
    Page,
    ActionBar,
    Label,
  },
};
</script>

<style scoped type="scss">
.page-wrapper * {
  margin: 3px;
}
</style>
