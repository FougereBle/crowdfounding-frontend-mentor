<template>
  <div class="container mx-auto px-6">
    <single-product :product="product" />
  </div>
</template>

<script>
import productData from "@/data/product";
import SingleProduct from "@/components/products/SingleProduct.vue";

export default {
  components: {
    SingleProduct
  },
  data() {
    return {
      product: productData
    };
  }
};
</script>
