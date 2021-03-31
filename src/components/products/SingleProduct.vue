<template>
  <div>
    <product-header
      :product="product"
      class="mb-6"
    />
    <product-goal
      :product="product"
      class="mb-6"
    />
    <product-body
      :product="product"
      class="mb-6"
    />
  </div>
</template>

<script>
import ProductHeader from "@/components/products/parts/ProductHeader.vue";
import ProductGoal from "@/components/products/parts/ProductGoal.vue";
import ProductBody from "@/components/products/parts/ProductBody.vue";

export default {
  components: {
    ProductHeader,
    ProductGoal,
    ProductBody
  },
  props: {
    product: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped></style>
