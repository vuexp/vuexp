<template>
  <ModalDialog v-if="isModalVisible" class="vxp-confirm-dialog" @close="close(false)">
    <span class="vxp-confirm-dialog__header" slot="header">{{ title }}</span>

    <div v-if="message" class="vxp-confirm-dialog__body" slot="body">
      <div>{{ message }}</div>
    </div>

    <div class="vxp-confirm-dialog__footer" slot="footer">
      <Button class="vxp-confirm-dialog__footer__cancel-button" :text="cancelButtonText" @tap="close(false)" />
      <Button class="vxp-confirm-dialog__footer__ok-button" :text="okButtonText" @tap="close(true)" />
    </div>
  </ModalDialog>
</template>

<script>
import Button from '../components/Button/Button';
import ModalDialog from '../components/BaseModal/ModalBase';

export default {
  name: 'ConfirmDialog',
  data() {
    return {
      isModalVisible: false,
    };
  },
  props: {
    title: {
      type: String,
      default: 'Confirm',
    },
    message: String,
    okButtonText: {
      type: String,
      default: 'Ok',
    },
    cancelButtonText: {
      type: String,
      default: 'Cancel',
    },
  },
  methods: {
    close(val) {
      this.isModalVisible = false;
      this.$emit('submit', val);
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
.vxp-confirm-dialog {
  &__footer {
    display: flex;
    flex: 1;
    justify-content: space-between;
    &__cancel-button,
    &__ok-button {
      @include vxp-dialog-button;
    }
    &__ok-button {
      margin-left: 20px;
    }
  }
}
</style>
