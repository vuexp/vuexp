<template>
  <StackLayout class="webView-wrapper">
    <VxpHtmlView id="htmlView_docs" :src="src" />
    <StackLayout orientation="horizontal" class="frm-grp">
      <VxpLabel id="htmlView_src_label" text="src:" width="50" />
      <VxpTextField id="htmlView_src_textField" v-model="src"/>
    </StackLayout>
  </StackLayout>
</template>

<script>
import VxpHtmlView from '../../../src/components/VxpHtmlView';
import VxpTextField from '../../../src/components/VxpTextField';
import VxpLabel from '../../../src/components/VxpLabel';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'VxpHtmlViewDoc',
  data() {
    return {
      src: ''
    };
  },
  components: {
    VxpHtmlView,
    VxpTextField,
    VxpLabel,
    StackLayout,
  },
};
</script>

<style lang="scss" scoped>
.webView-wrapper * {
  margin: 3px;
}
.frm-grp {
  input {
    width: 100%;
  }
}
</style>
