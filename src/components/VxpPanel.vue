<template>
  <StackLayout>
    <StackLayout class="vxp-panel-title">
      <VxpLabel v-if="title" class="vxp-panel-title__title" :text="title"></VxpLabel>
      <slot name="topbar"></slot>
    </StackLayout>
    <StackLayout class="vxp-panel-content">
      <slot name="content"></slot>
    </StackLayout>
  </StackLayout>
</template>

<script>
import StackLayout from '../layouts/StackLayout';
import VxpLabel from './VxpLabel';

export default {
  name: 'VxpPanel',
  components: {
    StackLayout,
    VxpLabel,
  },
  data() {
    return {};
  },
  props: {
    title: String,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import './../assets/styles/helpers.scss';
.vxp-panel-content {
  background-color: #f4f5fa;
  padding: unit(0) unit(15);
}
.vxp-panel-title {
  display: flex;
  height: 40px;
  background-color: #c0cad8;
  color: #434855;
  box-sizing: border-box;
  flex-direction: row;
  width: 100%;
  align-items: center;
  font-weight: bold;

  &__title {
    margin: 0 unit(5) 0 unit(15);
    white-space: nowrap;
    font-size: 18px;
  }

  & > * {
    flex: 1;
    align-items: center;
  }
  .vxp-panel-title-item,
  .vxp-navigation-button {
    flex: 0 1 auto;
  }
}
</style>
