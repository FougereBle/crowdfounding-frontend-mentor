<template>
  <div>
    <div>
      <pre>{{ pledges }}</pre>
    </div>
    <div>
      <pre>{{ selectedPledge }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pledges: {
      type: Array,
      default: () => []
    },
    selectedPledge: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped></style>
