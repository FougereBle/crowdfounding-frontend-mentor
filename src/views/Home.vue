<template>
  <div class="container mx-auto px-6">
    <single-product
      :product="product"
      @onPledgeSuccess="onPledgeSuccess"
    />
  </div>
</template>

<script>
import productData from "@/data/product";

import SingleProduct from "@/components/products/single-product.vue";

export default {
  components: {
    SingleProduct
  },
  data() {
    return {
      product: productData
    };
  },
  methods: {
    onPledgeSuccess(amount) {
      this.product.goal.backed += parseInt(amount);
      this.product.goal.backers += 1;
    }
  }
};
</script>
