<template>
  <div>
    <single-pledge
      v-for="pledge in pledges"
      :key="pledge.id"
      :pledge="pledge"
      class="mt-6"
    />
  </div>
</template>

<script>
import SinglePledge from "@/components/pledges/parts/SinglePledge.vue";

export default {
  components: {
    SinglePledge
  },
  props: {
    pledges: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped></style>
