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
  </div>
</template>

<script>
import ProductHeader from "@/components/products/parts/ProductHeader.vue";
import ProductGoal from "@/components/products/parts/ProductGoal.vue";

export default {
  components: {
    ProductHeader,
    ProductGoal
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
