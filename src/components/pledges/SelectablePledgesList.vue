<template>
  <div>
    <single-selectable-pledge
      v-for="pledge in pledges"
      :key="pledge.id"
      v-model="selectedPledge"
      :pledge="pledge"
      class="mt-6"
      @onMakePledge="onMakePledge"
    />
  </div>
</template>

<script>
import SingleSelectablePledge from "@/components/pledges/parts/SingleSelectablePledge.vue";

export default {
  components: {
    SingleSelectablePledge
  },
  props: {
    pledges: {
      type: Array,
      default: () => []
    },
    preselectedPledge: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      selectedPledge: this.preselectedPledge
    };
  },
  methods: {
    onMakePledge(pledge, amount) {
      this.$emit("onMakePledge", pledge, amount);
    }
  }
};
</script>

<style scoped></style>
