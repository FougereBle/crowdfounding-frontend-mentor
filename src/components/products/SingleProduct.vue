<template>
  <div>
    <product-header
      :product="product"
      class="mb-6"
      @onBackProject="onBackProject"
    />
    <product-goal
      :product="product"
      class="mb-6"
    />
    <product-body
      :product="product"
      class="mb-6"
      @onSelectPledge="onSelectPledge"
    />
    <popup v-model="pledgePopup">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-lg">
          Back this project
        </h3>
        <button @click="onClosePledgePopup">
          <close-icon
            :width="18"
            :height="18"
          />
        </button>
      </div>
      <p class="text-gray mt-6">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <selectable-pledges-list
        :pledges="product.pledges"
        :preselected-pledge="selectedPledge"
        @onMakePledge="onMakePledge"
      />
    </popup>
    <popup v-model="successPopup">
      <div
        class="w-16 h-16 flex justify-center items-center mx-auto bg-cyan rounded-full"
      >
        <check-icon
          :width="32"
          :height="32"
          color="white"
        />
      </div>
      <h2 class="font-bold text-lg text-center mt-6">
        Thanks for your support!
      </h2>
      <p class="text-center text-gray mt-6">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <div class="text-center">
        <button
          class="button primary mt-8"
          @click="closeSuccessPopup"
        >
          Got it!
        </button>
      </div>
    </popup>
  </div>
</template>

<script>
import pledgeMixin from "@/mixins/pledge";

import ProductHeader from "@/components/products/parts/ProductHeader.vue";
import ProductGoal from "@/components/products/parts/ProductGoal.vue";
import ProductBody from "@/components/products/parts/ProductBody.vue";
import SelectablePledgesList from "@/components/pledges/SelectablePledgesList.vue";
import Popup from "@/components/general/Popup.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import CheckIcon from "@/components/icons/CheckIcon.vue";

export default {
  components: {
    ProductHeader,
    ProductGoal,
    ProductBody,
    SelectablePledgesList,
    Popup,
    CloseIcon,
    CheckIcon
  },
  mixins: [pledgeMixin],
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pledgePopup: false,
      selectedPledge: null,
      successPopup: false
    };
  },
  methods: {
    onBackProject() {
      this.pledgePopup = true;
      this.selectedPledge = null;
    },
    onSelectPledge(pledge) {
      this.pledgePopup = true;
      this.selectedPledge = pledge;
    },
    onClosePledgePopup() {
      this.pledgePopup = false;
      this.selectedPledge = null;
    },
    onMakePledge(pledge, amount) {
      this.makePledge(this.product, pledge, amount);
      this.pledgePopup = false;
      this.selectedPledge = null;
      this.successPopup = true;
    },
    closeSuccessPopup() {
      this.successPopup = false;
    }
  }
};
</script>

<style scoped></style>
