<template>
  <StackLayout>
    <StackLayout style="margin-top:20px" class="demo-panel">
      <Label text="Live example" class="demo-panel__title"/>
      <VxpLink :text="text" :externalUrl="externalUrl" id="linkButton" :disabled="isDisabled"></VxpLink>
      <VxpLink
        text="Another link without externalUrl to test click event"
        @tap="onClicked($event)"
        id="linkButtonWithOutUrl"
        :disabled="isDisabled"
      ></VxpLink>
    </StackLayout>
    <StackLayout class="demo-panel">
      <Label text="Manage VxpLink Properties" class="demo-panel__title"/>
      <StackLayout orientation="horizontal" class="m-b-10">
        <Label text="Text:"></Label>
        <TextField id="linkButton__text__textfield" v-model="text" :editable="true"/>
      </StackLayout>
      <StackLayout orientation="horizontal" class="m-b-10">
        <Label text="External Url:"></Label>
        <TextField id="linkButton__externalUrl__textfield" v-model="externalUrl" :editable="true"/>
      </StackLayout>
      <StackLayout orientation="horizontal" class="m-b-10">
        <Label id="linkButton__tap__eventLog" :text="eventLog"></Label>
      </StackLayout>
      <StackLayout orientation="horizontal" class="m-b-10">
        <Label text="Disable clicking:"></Label>
        <VxpCheckbox id="linkButton__disable__checkbox" v-model="isDisabled"/>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import TextField from '../../../src/core/components/TextField/TextField';
import Label from '../../../src/core/components/Label/Label';
import StackLayout from '../../../src/layouts/StackLayout';
import VxpLink from '../../../src/components/VxpLink';
import VxpCheckbox from '../../../src/components/VxpCheckbox';

export default {
  name: 'VxpLinkLiveDemo',
  components: { StackLayout, TextField, Label, VxpLink, VxpCheckbox },
  data() {
    return {
      text: 'Link to another site',
      externalUrl: 'https://github.com/vuexp',
      eventName: '',
      isDisabled: false,
    };
  },
  computed: {
    eventLog() {
      return `event: ${this.eventName}`;
    },
  },
  methods: {
    onClicked({type}) {
      this.eventName = type;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../public/style.scss';
select {
  border: 1px solid #eaeaea;
  border-radius: 3px;
  padding: 2px 10px 2px 0;
}

button {
  padding: 10px 20px;
  font-weight: lighter;
}
</style>
