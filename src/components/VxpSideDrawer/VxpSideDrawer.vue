<template>
  <SideDrawer ref="drawer">
    <StackLayout v-view:drawerContent>
      <slot name="drawerContent"></slot>
    </StackLayout>
    <StackLayout v-view:mainContent>
      <slot name="mainContent"></slot>
    </StackLayout>
  </SideDrawer>
</template>

<script>
import SideDrawer from '../../core/components/SideDrawer/SideDrawer';
import StackLayout from '../../layouts/StackLayout';

export default {
  name: 'VxpSideDrawer',
  components: {
    SideDrawer,
    StackLayout,
  },
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
