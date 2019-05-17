<template>
  <transition name="fade" :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'FadeTransition',
  props: {
    duration: {
      type: [String, Number],
      default: '500',
    },
  },
  computed: {
    enterActiveClass() {
      return `fade-enter-active-duration-${this.duration}`;
    },
    leaveActiveClass() {
      return `fade-leave-active-duration-${this.duration}`;
    },
  },
};
</script>

<style lang="scss">
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

$durations: 200, 500, 1000;

@mixin enterAnimation($duration) {
  animation-name: fade;
  animation-fill-mode: forwards;
  animation-duration: #{$duration}ms;
}
@mixin leaveAnimation($duration) {
  animation-name: fade;
  animation-direction: reverse;
  animation-fill-mode: forwards;
  animation-duration: #{$duration}ms;
}

@each $duration in $durations {
  .fade-enter-active-duration-#{$duration} {
    @include enterAnimation($duration);
  }

  .fade-leave-active-duration-#{$duration} {
    @include leaveAnimation($duration);
  }
}
</style>
