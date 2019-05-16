<template>
  <ModalDialog v-if="isModalVisible" class="vxp-action-dialog" @close="close">
    <Label class="vxp-action-dialog__header" slot="header" :text="title" />

    <StackLayout class="vxp-action-dialog__body" slot="body">
      <StackLayout class="vxp-action-dialog__body__item" v-for="(option, index) in options" :key="index">
        <Button @tap="$emit('submit', option)" :text="option" :link="true" />
      </StackLayout>
    </StackLayout>

    <StackLayout class="vxp-action-dialog__footer" slot="footer">
      <Button class="vxp-action-dialog__footer__cancel-button" :text="cancelButtonText" @tap="close" :link="true" />
    </StackLayout>
  </ModalDialog>
</template>

<script>
import Button from '../Button';
import ModalDialog from '../ModalDialog';
import StackLayout from '../../layouts/StackLayout';

export default {
  name: 'ActionDialog',
  data() {
    return {
      isModalVisible: false,
    };
  },
  props: {
    title: String,
    cancelButtonText: String,
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    close() {
      this.isModalVisible = false;
      this.$emit('submit', this.cancelButtonText);
    },
  },
  components: {
    ModalDialog,
    Button,
    StackLayout,
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/components/dialogs';

.vxp-action-dialog {
  &__body {
    &__item {
      padding: 0;
      margin: 0;
      .vxp-button {
        width: 100%;
        text-align: left;
        background-color: #fff;
        border: none;
        outline: none;
        padding: 8px 6px;
        margin: 2px 0;

        &:hover {
          cursor: pointer;
          background-color: #ebebeb;
        }
      }
    }
  }
  &__footer {
    &__cancel-button {
      @include vxp-dialog-button;
    }
  }
}
</style>
