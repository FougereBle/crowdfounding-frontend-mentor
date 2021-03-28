<template>
  <div class="bg-white p-6 relative rounded-lg">
    <h2 class="font-bold text-lg">
      About this project
    </h2>
    <p
      class="mt-6 text-dark-grey md:mt-8"
      v-html="product.body"
    />
    <product-pledges
      class="mt-6 md:mt-8"
      :pledges="product.pledges"
      @onPledgeSuccess="onPledgeSuccess"
    />
  </div>
</template>

<script>
import ProductPledges from "@/components/products/parts/product-pledges.vue";

export default {
  components: {
    ProductPledges
  },
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  methods: {
    onPledgeSuccess(amount) {
      this.$emit("onPledgeSuccess", amount);
    }
  }
};
</script>

<style scoped></style>
