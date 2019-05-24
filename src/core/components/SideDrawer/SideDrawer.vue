<template>
  <AbsoluteLayout class="nu-sidedrawer">
    <FadeTransition duration="100">
      <FlexboxLayout class="nu-sidedrawer__overlay" left="0" top="0" v-show="opened" @tap="opened = !opened"></FlexboxLayout>
    </FadeTransition>
    <FlexboxLayout ref="mainContent" class="nu-sidedrawer__content" left="0" top="0"></FlexboxLayout>
    <SlideTransition duration="200">
      <FlexboxLayout
        ref="drawerContent"
        class="nu-sidedrawer__drawer"
        v-show="opened"
        :class="{ 'nu-sidedrawer__drawer--closed': !opened, 'nu-sidedrawer__drawer--opened': opened }"
      ></FlexboxLayout>
    </SlideTransition>
    <slot v-show="slotShow"></slot>
  </AbsoluteLayout>
</template>

<script>
import Gestures from '../../mixins/GestureMixin';
import AbsoluteLayout from '../../../layouts/AbsoluteLayout';
import FlexboxLayout from '../../../layouts/FlexboxLayout';
import SlideTransition from '../../../transitions/SlideTransition';
import FadeTransition from '../../../transitions/FadeTransition';

export default {
  name: 'SideDrawer',
  components: {
    AbsoluteLayout,
    FlexboxLayout,
    SlideTransition,
    FadeTransition,
  },
  data() {
    return {
      slotShow: false,
      opened: false,
      nativeView: {
        showDrawer: this.showDrawer,
        closeDrawer: this.closeDrawer,
      },
    };
  },
  methods: {
    showDrawer() {
      this.opened = true;
    },
    closeDrawer() {
      this.opened = false;
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
@import '../../../assets/styles/helpers.scss';

.nu-sidedrawer {
  overflow: hidden;
  height: 100%;

  &__overlay {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &__content {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__drawer {
    min-width: unit(100);
    height: 100%;
    background-color: #fff;

    top: 0;
    left: 0;
    bottom: 0;
    z-index: 11;

    &--opened {
      box-shadow: unit(0) unit(8) unit(10) unit(-5) rgba(0, 0, 0, 0.2), unit(0) unit(16) unit(24) unit(2) rgba(0, 0, 0, 0.14),
        unit(0) unit(6) unit(30) unit(5) rgba(0, 0, 0, 0.12);
    }

    /*&--closed {
    }*/
  }
}
</style>
