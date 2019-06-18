<template>
  <StackLayout class="webView-wrapper">
    <VxpWebView id="WebView" :src="src" :html="html" @loadStarted="webViewLoadStarted" @loadFinished="webViewLoadFinished" />
    <StackLayout orientation="horizontal" class="frm-grp">
      <VxpLabel text="src:" width="50" />
      <VxpTextField v-model="src" id="WebView_src_textfield" />
    </StackLayout>
    <StackLayout orientation="horizontal" class="frm-grp">
      <VxpLabel text="html:" width="50" />
      <VxpTextField v-model="html" id="WebView_html_textfield" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="Event output:" />
      <VxpLabel :text="eventOutput" id="WebView_eventOutput_Label" />
    </StackLayout>
  </StackLayout>
</template>

<script>
import VxpWebView from '../../../src/components/VxpWebView';
import VxpTextField from '../../../src/components/VxpTextField';
import VxpLabel from '../../../src/components/VxpLabel';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'VxpWebViewDoc',
  components: {
    VxpWebView,
    VxpTextField,
    StackLayout,
    VxpLabel,
  },
  data() {
    return {
      src: '',
      html: '',
      eventOutput: '',
    };
  },
  methods: {
    webViewLoadStarted(event) {
      this.eventOutput = 'loadStarted';
      console.log('VxpWebView Loading started.');
    },
    webViewLoadFinished(event) {
      this.eventOutput = 'loadFinished';
      console.log('VxpWebView Loading finished.');
    },
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
