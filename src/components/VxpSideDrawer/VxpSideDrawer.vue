<template>
  <SideDrawer ref="drawer" class="vxp-side-drawer">
    <StackLayout v-view:drawerContent>
      <slot name="drawerContent"></slot>
    </StackLayout>
    <StackLayout v-view:mainContent class="vxp-side-drawer__main-content">
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
<style lang="scss">
.vxp-side-drawer {
  &__main-content {
    width: 100%;
  }
}
</style>
