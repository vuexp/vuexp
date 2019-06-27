<template>
  <RadSideDrawer ref="drawer" drawerLocation="Left" drawerContentSize="auto">
    <StackLayout v-view:drawerContent>
      <slot name="drawerContent"></slot>
    </StackLayout>
    <StackLayout v-view:mainContent>
      <slot name="mainContent"></slot>
    </StackLayout>
  </RadSideDrawer>
</template>

<script>
import Vue from 'nativescript-vue'; // eslint-disable-line
import SideDrawerPlugin from 'nativescript-ui-sidedrawer/vue'; // eslint-disable-line

Vue.use(SideDrawerPlugin);
export default {
  name: 'VxpSideDrawer',
  mounted() {},
  methods: {
    showDrawer() {
      this.$refs.drawer.showDrawer();
    },
    closeDrawer() {
      this.$refs.drawer.closeDrawer();
    },
  },
};
</script>
<style lang="sass" scoped></style>
