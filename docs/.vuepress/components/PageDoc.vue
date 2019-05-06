<template>
  <Page :actionBarHidden="actionBarHidden">
    <ActionBar title="My App" />
    <StackLayout class="page-wrapper">
      <StackLayout>
        <Label text="My Content" />
      </StackLayout>
      <StackLayout orientation="horizontal">
        <Label text="actionBarHidden:" />
        <input type="checkbox" v-model="actionBarHidden" id="Page_actionBarHidden_input" />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import StackLayout from '../../../src/layouts/StackLayout';
import Page from '../../../src/components/Page';
import ActionBar from '../../../src/components/ActionBar';
import Label from '../../../src/components/Label';

export default {
  name: 'PageDoc',
  data() {
    return {
      actionBarHidden: false,
      backgroundSpanUnderStatusBar: false,
      statusBarStyle: 'light',
    };
  },
  methods: {
    navigatedFrom(event) {
      console.log('Emitted after the app has navigated away from the current page.');
    },
    navigatedTo(event) {
      console.log('Emitted after the app has navigated to the current page.');
    },
    navigatingFrom(event) {
      console.log('Emitted before the app has navigated away from the current page.');
    },
    navigatingTo(event) {
      console.log('Emitted before the app has navigated to the current page.');
    },
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
