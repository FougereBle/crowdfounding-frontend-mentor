<template>
  <div>
    <div v-if="!pledgeSuccess || !selection">
      <div
        v-for="pledge in pledges"
        :key="pledge.id"
        class="mt-6"
      >
        <product-single-pledge
          v-model="selectedPledge"
          :selection="selection"
          :pledge="pledge"
          @onPledge="onPledge"
        />
      </div>
    </div>
    <div v-if="pledgeSuccess">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex justify-center items-center min-h-screen">
          <div class="fixed inset-0 bg-black opacity-50" />
          <div class="bg-white p-6 relative rounded-lg w-full mx-6 my-32">
            <div
              class="rounded-full mx-auto w-16 h-16 bg-moderate-cyan text-white flex justify-center items-center"
            >
              <svg
                class="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 class="font-bold text-xl text-center mt-6">
              Thanks for your support!
            </h2>
            <p class="text-dark-grey text-center mt-6">
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </p>
            <div class="text-center mt-6">
              <button
                class="cursor-pointer bg-moderate-cyan text-white font-bold rounded-full py-4 px-10 inline-block"
                @click="close"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSinglePledge from "@/components/products/parts/product-single-pledge.vue";

export default {
  components: {
    ProductSinglePledge
  },
  props: {
    product: {
      type: Object,
      default: null
    },
    pledges: {
      type: Array,
      default: () => []
    },
    selection: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedPledge: null,
      pledgeSuccess: false
    };
  },
  methods: {
    close() {
      this.$emit("onClose");
      this.pledgeSuccess = false;
    },
    onPledge(amount) {
      this.$emit("onPledgeSuccess", amount);
      this.pledgeSuccess = true;
    }
  }
};
</script>

<style scoped></style>
