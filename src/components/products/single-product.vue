<template>
  <div>
    <product-header
      class="mb-6"
      :product="product"
      @onBackProject="backProject"
    />
    <product-goal
      class="mb-6"
      :product="product"
    />
    <product-description
      class="mb-6"
      :product="product"
      @onPledgeSuccess="onPledgeSuccess"
    />
    <product-back
      v-show="selectPledgePopup"
      ref="productBack"
      :product="product"
      @onClose="cancelBackProject"
      @onPledgeSuccess="onPledgeSuccess"
    />
  </div>
</template>

<script>
import ProductHeader from "@/components/products/parts/product-header.vue";
import ProductGoal from "@/components/products/parts/product-goal.vue";
import ProductDescription from "@/components/products/parts/product-description.vue";
import ProductBack from "@/components/products/product-back.vue";

export default {
  components: {
    ProductHeader,
    ProductGoal,
    ProductDescription,
    ProductBack
  },
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      selectPledgePopup: false
    };
  },
  methods: {
    backProject() {
      this.selectPledgePopup = true;
    },
    cancelBackProject() {
      this.selectPledgePopup = false;
    },
    onPledgeSuccess(amount) {
      this.$emit("onPledgeSuccess", amount);
    }
  }
};
</script>

<style scoped></style>
