<template>
  <div
    v-if="value"
    class="popup"
  >
    <div class="popup-container">
      <div class="card">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped></style>
