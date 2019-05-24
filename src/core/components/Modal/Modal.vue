<template>
  <transition v-if="isModalVisible" @close="closeModal" name="modal-fade">
    <div @click="closeModal" class="vxp-modal" :class="modalClass">
      <div @click.stop class="vxp-modal__backdrop" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <section class="vxp-modal__body">
          <component :is="contentComponent" />
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import Gestures from '../../mixins/GestureMixin';

export default {
  name: 'Modal',
  data() {
    return {
      isModalVisible: false,
    };
  },
  props: {
    fullscreen: {
      type: Boolean,
      default: false,
    },
    contentComponent: {
      type: Object,
    },
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
    },
  },
  computed: {
    modalClass: function() {
      return `${this.fullscreen ? 'vxp-modal--fullscreen' : ''}`;
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
@import '../../../assets/styles/helpers';
.vxp-modal {
  position: fixed;
  top: unit(0);
  border-radius: unit(6);
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: unit(0) unit(8) unit(16) unit(0) rgba(0, 0, 0, 0.2);
  bottom: unit(0);
  left: unit(0);
  right: unit(0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  &__backdrop {
    background: #ffffff;
    box-shadow: unit(1) unit(1) unit(10) unit(0);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: unit(5);
  }
  &--fullscreen {
    .vxp-modal__backdrop {
      width: 90%;
      height: 90%;
    }
  }
  &__body {
    position: relative;
    padding: unit(20) unit(15);
  }
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
