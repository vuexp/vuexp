<template>
  <StackLayout @tap="onImageTap" class="vxp-image-uploader" :width="size" :height="size">
    <AbsoluteLayout>
      <VxpImage :src="src" class="vxp-image-uploader__img" stretch="aspectFill" />
      <VxpLabel v-if="!disabled" :top="iconMargin" :left="iconMargin" class="vxp-image-uploader__edit_img" />
    </AbsoluteLayout>
  </StackLayout>
</template>

<script>
/* eslint-disable max-len */
import VxpImage from './VxpImage';
import VxpLabel from './VxpLabel';
import StackLayout from '../layouts/StackLayout';
import AbsoluteLayout from '../layouts/AbsoluteLayout';
import FilePicker from '../helpers/FilePicker';
import FileUploader from '../helpers/FileUploader';

export default {
  name: 'VxpImageUploader',
  data() {
    return {
      filePicker: null,
      fileUploader: null,
    };
  },
  props: {
    src: {
      type: String,
      default: ' ',
    },
    size: {
      type: Number,
      default: 100,
    },
    maxSize: {
      type: Number,
      default: 10 * 1024 * 1024, // default 10MB
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: '',
    },
  },
  components: {
    VxpImage,
    VxpLabel,
    StackLayout,
    AbsoluteLayout,
  },
  mounted() {
    this.filePicker = new FilePicker();

    this.filePicker.options = {
      pickerType: this.filePicker.pickerTypes.media,
      extensions: [],
      maxNumberFiles: 1,
    };

    this.filePicker.on('selected', files => {
      if (files.length > 0) {
        const file = files[0];
        // extract file information
        this.filePicker
          .extractFilePath(file)
          .then(result => {
            if (result.file.size === 0) {
              return;
            }

            if (result.file.size > this.maxSize) {
              this.$emit('onMaxFileError');
            } else {
              this.onFileSelected(result.file);
            }
          })
          .catch(() => {
            console.error('error occured while extracting file information!'); //eslint-disable-line
          });
      }
    });
  },
  computed: {
    iconMargin() {
      return this.size - 30;
    },
  },
  methods: {
    onImageTap() {
      if (this.disabled) {
        return;
      }

      this.filePicker.open();
    },
    onProgress(percent) {
      console.log('file upload progress - %' + percent); //eslint-disable-line
      this.$emit('onUploadProgress', percent);
    },
    onFileSelected(file) {
      const { target } = this;
      const headers = {};
      const onProgress = p => {
        this.onProgress(p);
      };

      this.fileUploader = new FileUploader({ file, target, headers, onProgress });
      this.fileUploader.upload().then(
        data => {
          console.log('file uploaded!', data); //eslint-disable-line
          this.$emit('onUploadCompleted', data);
        },
        error => {
          console.log('error occured during file upload!', error); //eslint-disable-line
          this.$emit('onUploadError', error);
        },
      );
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/helpers';
.vxp-image-uploader {
  user-select: none;

  &__img {
    background-color: #e5e4e8;
    border-radius: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 100%;
    z-index: 3;
    width: 100%;
    height: 100%;
  }

  &__edit_img {
    background-color: #4e75fe;
    background-image: url('data:image/png;base64,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');
    border-radius: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 4;
    width: unit(30);
    height: unit(30);
    bottom: 0;
    right: 0;
  }
}
</style>
