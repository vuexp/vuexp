<template>
  <ModalDialog v-if="isModalVisible" class="vxp-alert-dialog" @close="close">
    <span class="vxp-alert-dialog__header" slot="header">{{ title }}</span>

    <div class="vxp-alert-dialog__body" slot="body">
      <div>{{ message }}</div>
    </div>

    <div class="vxp-alert-dialog__footer" slot="footer">
      <Button class="vxp-alert-dialog__footer__ok-button" :text="okButtonText" @tap="close" :link="true" />
    </div>
  </ModalDialog>
</template>

<script>
import Button from '../components/Button/Button';
import ModalDialog from '../components/ModalDialog/ModalDialog';

export default {
  name: 'AlertDialog',
  data() {
    return {
      isModalVisible: false,
    };
  },
  props: {
    title: {
      type: String,
      default: 'Alert',
    },
    message: String,
    okButtonText: {
      type: String,
      default: 'Ok',
    },
  },
  methods: {
    close(event) {
      this.isModalVisible = false;
      this.$emit('submit', event);
    },
  },
  components: {
    ModalDialog,
    Button,
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/components/dialogs';

.vxp-alert-dialog {
  &__footer {
    &__ok-button {
      @include vxp-dialog-button;
    }
  }
}
</style>
