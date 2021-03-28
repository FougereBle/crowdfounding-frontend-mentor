<template>
  <div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex justify-center items-center min-h-screen">
        <div class="fixed inset-0 bg-black opacity-50" />
        <div class="bg-white p-6 relative rounded-lg w-full mx-6 my-32">
          <header class="flex justify-between items-center">
            <h3 class="font-bold text-lg">
              Back this project
            </h3>
            <button @click="close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6 text-dark-grey"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>
          <p class="text-dark-grey mt-6">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <product-pledges
            :selection="true"
            class="mt-6 md:mt-8"
            :pledges="product.pledges"
            @onClose="close"
            @onPledgeSuccess="onPledgeSuccess"
          />
        </div>
      </div>
    </div>
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
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("onClose");
    },
    onPledgeSuccess(amount) {
      this.$emit("onPledgeSuccess", amount);
    }
  }
};
</script>

<style scoped></style>
