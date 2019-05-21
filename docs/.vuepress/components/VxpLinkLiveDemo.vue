<template>
  <StackLayout>
    <StackLayout style="margin-top:20px" class="demo-panel">
      <Label text="Live example" class="demo-panel__title"/>
      <VxpLink :text="text" :externalUrl="externalUrl" :visibility="visibility" id="linkButton"></VxpLink>
      <VxpLink
        text="Another link without externalUrl to test click event"
        @tap="onClicked($event)"
        id="linkButtonWithOutUrl"
      ></VxpLink>
    </StackLayout>
    <StackLayout class="demo-panel">
      <Label text="Manage Link Button Properties" class="demo-panel__title"/>
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
    </StackLayout>
  </StackLayout>
</template>

<script>
import TextField from '../../../src/components/TextField';
import Label from '../../../src/components/Label';
import StackLayout from '../../../src/layouts/StackLayout';
import VxpLink from '../../../src/components/VxpLink';

export default {
  name: 'VxpLinkLiveDemo',
  components: { StackLayout, TextField, Label, VxpLink },
  data() {
    return {
      text: 'Link to another site',
      externalUrl: 'https://github.com/vuexp',
      visibility: true,
      eventName: '',
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
