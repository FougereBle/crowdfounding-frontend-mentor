<template>
  <div class="card">
    <h2 class="text-lg font-bold mt-4">
      About this project
    </h2>
    <p
      class="mt-6 text-gray"
      v-html="product.body"
    />
    <div class="mt-3">
      <pledges-list
        :pledges="product.pledges"
        @onSelectPledge="onSelectPledge"
      />
    </div>
  </div>
</template>

<script>
import PledgesList from "@/components/pledges/PledgesList.vue";

export default {
  components: {
    PledgesList
  },
  props: {
    product: {
      type: Object,
      default: null
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
