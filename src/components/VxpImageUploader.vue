<template>
  <StackLayout @tap="onImageTap" class="vxp-image-uploader" :width="size" :height="size">
    <VxpImage :src="src" class="vxp-image-uploader__img" stretch="aspectFill" />
  </StackLayout>
</template>

<script>
import VxpImage from './VxpImage';
import StackLayout from '../layouts/StackLayout';
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
    StackLayout,
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
.vxp-image-uploader {
  user-select: none;

  &__img {
    background-color: gray;
    border-radius: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 100%;
    z-index: 3;
    width: 100%;
    height: 100%;
  }
}
</style>
