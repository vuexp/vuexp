<template>
  <StackLayout>
    <StackLayout class="demo-panel">
      <VxpLabel text="VxpImageUploader Properties" class="demo-panel__title"/>

      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Src" class="option-label"/>
        <TextField id="vxpimageuploader_src_input" v-model="uploaderSrc" class="option-input"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Size" class="option-label"/>
        <TextField id="vxpimageuploader_size_input" v-model="uploaderSize" class="option-input"/>
        <VxpLabel text="(in pixels)"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Max File Size" class="option-label"/>
        <TextField
          id="vxpimageuploader_maxfilesize_input"
          v-model="uploaderMaxSize"
          class="option-input"
        />
        <VxpLabel text="(in bytes)"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Disabled" class="option-label"/>
        <input id="vxpimageuploader_disabled_cb" type="checkbox" v-model="uploaderDisabled">
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Target" class="option-label"/>
        <TextField
          id="vxpimageuploader_target_input"
          v-model="uploaderTarget"
          class="option-input"
        />
      </FlexboxLayout>
    </StackLayout>

    <StackLayout class="demo-panel">
      <VxpLabel text="Rendered Result" class="demo-panel__title"/>
      <VxpImageUploader
        id="vxpimageuploader_component"
        :src="uploaderSrc"
        :disabled="uploaderDisabled"
        :target="uploaderTarget"
        :size="parseInt(uploaderSize)"
        :maxSize="parseInt(uploaderMaxSize)"
        @onMaxFileError="onMaxFileError"
        @onUploadError="onUploadError"
        @onUploadCompleted="onUploadCompleted"
      />
    </StackLayout>

    <StackLayout class="demo-panel">
      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Events" class="demo-panel__title"/>
        <VxpButton
          id="vxpimageuploader_clearevents_button"
          text="Clear"
          @tap="uploaderEvents = []"
          style="margin-left: 20px;"
        />
      </FlexboxLayout>
      <VxpLabel :id="'vxpimageuploader_event'+index+'_label'" v-for="(item, index) in uploaderEvents" v-bind:key="index" :text="item" :textWrap="true"/>
    </StackLayout>
  </StackLayout>
</template>

<script>
import VxpLabel from '../../../src/components/VxpLabel';
import VxpButton from '../../../src/components/VxpButton';
import VxpImageUploader from '../../../src/components/VxpImageUploader';
import StackLayout from '../../../src/layouts/StackLayout';
import TextField from '../../../src/core/components/TextField/TextField';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';

export default {
  name: 'VxpImageUploaderLiveDemo',
  data() {
    return {
      uploaderSrc: '../images/logo.png',
      uploaderSize: '100',
      uploaderMaxSize: (10 * 1024 * 1024).toString(),
      uploaderDisabled: false,
      uploaderTarget: 'http://localhost:9000/upload',
      uploaderEvents: [],
    };
  },
  components: {
    FlexboxLayout,
    VxpLabel,
    VxpButton,
    StackLayout,
    TextField,
    VxpImageUploader,
  },
  methods: {
    onMaxFileError() {
      this.uploaderEvents.push("Max file size error.");
    },
    onUploadError(error) {
      this.uploaderEvents.push("Upload error.");
    },
    onUploadCompleted(data) {
      this.uploaderEvents.push("Upload completed! Response: " + data);
    },
  }
};
</script>

<style lang="scss" scoped>
.flexbox {
  color: #2c3e50;
}

.demo-panel {
  padding: 10px;
  border: #3c495e;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #f1f1f1;

  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}

.editor-param-input {
  width: 50px;
}

.option-label {
  margin-right: 10px;
  margin-bottom: 5px;
  width: 130px;
}

.option-input {
  width: 130px;
}

.option-row {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 100%;
}

.editor-param-title {
  margin: 0 5px 0 5px;
}

select {
  border: 1px solid #eaeaea;
  border-radius: 3px;
  padding: 2px 10px 2px 0;
}

button {
  padding: unset;
  padding-left: 5px;
  padding-right: 5px;
  min-width: unset;
}
</style>
