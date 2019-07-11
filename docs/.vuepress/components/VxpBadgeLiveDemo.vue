<template>
  <StackLayout class="theme--vuexp">
    <StackLayout>
      <VxpBadge
        id="vxp-badge"
        :badge="badge"
        horizontalAlignment="center"
        :primary="primary"
        :alert="alert"
        :secondary="secondary"
        :width="width"
        :height="height"
      ></VxpBadge>
    </StackLayout>

    <StackLayout class="demo-panel">
      <VxpLabel text="Badge Count" class="demo-panel__title" />
      <VxpTextField id="vxp-badge__badge" v-model="badge" keyboardType="number" />
    </StackLayout>

    <StackLayout class="demo-panel">
      <VxpLabel text="Width" class="demo-panel__title" />
      <VxpTextField id="vxp-badge__width" v-model="width" keyboardType="number" />
    </StackLayout>

    <StackLayout class="demo-panel">
      <VxpLabel text="Height" class="demo-panel__title" />
      <VxpTextField id="vxp-badge__height" v-model="height" keyboardType="number" />
    </StackLayout>

    <StackLayout class="demo-panel" orientation="vertical">
      <VxpLabel text="Theme" class="demo-panel__title" />
      <VxpDropDown
        id="vxp-badge__theme"
        :items="dropdownItems"
        @changeIndex="onChangeIndex"
        :index="0"
      ></VxpDropDown>
    </StackLayout>
  </StackLayout>
</template>

<script>
import VxpBadge from '../../../src/components/VxpBadge';
import VxpLabel from '../../../src/components/VxpLabel';
import VxpTextField from '../../../src/components/VxpTextField';
import VxpDropDown from '../../../src/components/VxpDropDown';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'VxpBadgeLiveDemo',
  components: {
    StackLayout,
    VxpLabel,
    VxpTextField,
    VxpDropDown,
    VxpBadge,
  },
  data() {
    return {
      badge: "1",
      primary: true,
      secondary: false,
      alert: false,
      width: "35",
      height: "20",
      dropdownItems: {
        label: 'value',
        values: [{ value: 'Primary' }, { value: 'Secondary' }, { value: 'Alert' }],
      },
    };
  },
  methods: {
    onChangeIndex(index) {
      this.primary = this.secondary = this.alert = false;
      if (index === 0) {
        this.primary = true;
      } else if (index === 1) {
        this.secondary = true;
      } else if (index === 2) {
        this.alert = true;
      }
    },
  },
};
</script>
<style lang="scss">
</style>

