<template>
  <div>
    Selectable Pledges List Here
  </div>
</template>

<script>
export default {
  props: {
    pledges: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped></style>
