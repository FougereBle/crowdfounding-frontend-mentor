<template>
  <div>
    <single-pledge
      v-for="pledge in pledges"
      :key="pledge.id"
      :pledge="pledge"
      class="mt-6"
      @onSelectPledge="onSelectPledge"
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
  },
  methods: {
    onSelectPledge(pledge) {
      this.$emit("onSelectPledge", pledge);
    }
  }
};
</script>

<style scoped></style>
