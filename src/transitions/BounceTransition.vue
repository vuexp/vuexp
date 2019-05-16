<template>
  <transition name="bounce" :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'BounceTransition',
  props: {
    duration: {
      type: [String, Number],
      default: '500',
    },
  },
  computed: {
    enterActiveClass() {
      return `bounce-enter-active-duration-${this.duration}`;
    },
    leaveActiveClass() {
      return `bounce-leave-active-duration-${this.duration}`;
    },
  },
};
</script>

<style lang="scss">
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

$durations: 200, 500, 1000;

@mixin enterAnimation($duration) {
  animation-name: bounceIn;
  animation-fill-mode: forwards;
  animation-duration: #{$duration}ms;
}
@mixin leaveAnimation($duration) {
  animation-name: bounceIn;
  animation-direction: reverse;
  animation-fill-mode: forwards;
  animation-duration: #{$duration}ms;
}

@each $duration in $durations {
  .bounce-enter-active-duration-#{$duration} {
    @include enterAnimation($duration);
  }

  .bounce-leave-active-duration-#{$duration} {
    @include leaveAnimation($duration);
  }
}
</style>
