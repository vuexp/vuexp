<template>
  <StackLayout style="margin-top:20px" class="demo-panel">
    <VxpLabel class="demo-panel__title" text="Result" style="margin-bottom:20px"></VxpLabel>
    <VxpPanel :title="title">
      <StackLayout orientation="horizontal" slot="topbar">
        <VxpIconButton
          :size="30"
          class="vxp-panel-title__icons"
          alignSelf="flex-end"
          v-for="(child, index) in children"
          :key="index"
          primary
          @tap="onPanelIconClick($event)"
          iconName="fa"
          :icon="child.icon"
        />
      </StackLayout>
      <StackLayout slot="content">
        <VxpLabel text="Label 1"></VxpLabel>
        <VxpLabel text="Label 2"></VxpLabel>
      </StackLayout>
    </VxpPanel>

    <VxpLabel class="demo-panel__title" text="Properties" style="margin-top:20px"></VxpLabel>
    <StackLayout class="form-group" orientation="horizontal">
      <VxpLabel class="control-label m-b-10" text="Change Title:"></VxpLabel>
      <VxpTextField id="vxpPanel__title__input" type="text" v-model="title" placeholder="Enter title..."></VxpTextField>
      <i class="bar"></i>
    </StackLayout>
    <StackLayout class="form-group p-l-2" v-for="(child, idx) in children" orientation="horizontal" :key="idx">
      <VxpLabel class="control-label p-l-2" text="Change Icon"></VxpLabel>

      <select style="height: 1.9rem;" id="vxpPanel__shareicon__select" v-model="child.icon">
        <option v-for="icon in shareIcons" v-bind:value="icon" :key="icon">{{ icon }}</option>
      </select>
      <i class="bar"></i>
      <VxpIconButton :size="30" :id="'add_panelicon_' + idx" @tap="addPanelIcon($event)" iconName="fa" :icon="'fa-plus'" primary />
      <VxpIconButton :size="30" :id="'remove_panelicon' + idx" @tap="removePanelIcon($event, idx)" iconName="fa" :icon="'fa-trash'" primary />
    </StackLayout>
    <VxpIconButton :size="30" v-if="children.length == 0" :id="'add_panelicon_0'" @tap="addPanelIcon($event)" iconName="fa" :icon="'fa-plus'" primary />
  </StackLayout>
</template>

<script>
import StackLayout from '../../../src/layouts/StackLayout';
import VxpPanel from '../../../src/components/VxpPanel';
import VxpLabel from '../../../src/components/VxpLabel';
import VxpTextField from '../../../src/components/VxpTextField';
import VxpIconButton from '../../../src/components/VxpIconButton';

export default {
  name: 'VxpPanelLiveDemo',
  components: { StackLayout, VxpPanel, VxpLabel, VxpTextField, VxpIconButton },
  data() {
    return {
      children: [{ icon: 'fa-share' }],
      selectedShareIcon: '',
      title: 'Panel',
      shareIcons: ['fa-share', 'fa-share-alt', 'fa-share-square-o'],
    };
  },
  methods: {
    onPanelIconClick(index) {
      console.log(index);
    },
    addPanelIcon() {
      if (this.children.length == 2) {
        alert('You can add 2 icons');
        return;
      }
      this.children.push({ icon: 'fa-share-alt' });
    },
    removePanelIcon(e, idx) {
      this.children.splice(idx, 1);
    },
    onChangeIndex(index, item) {
      this.selectedIndex = JSON.stringify(item);
    },
  },
};
</script>

<style scoped lang="scss">
.vxp-panel-title__icons {
  color: #425574;
  &__icon {
    color: #425574;
  }

  &--has-icon {
    padding: 0;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.1) radial-gradient(circle, transparent 1%, rgba(255, 255, 255, 0.1) 1%) center/15000%;
  }

  &:active {
    background-size: 100%;
    transition: background 0s;
  }
}

@import url('/fonts/fontawesome.min.css');
@import '../public/style.scss';
</style>
