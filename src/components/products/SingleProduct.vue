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
      />
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

export default {
  components: {
    ProductHeader,
    ProductGoal,
    ProductBody,
    SelectablePledgesList,
    Popup,
    CloseIcon
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
      selectedPledge: null
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
      // this.makePledge(this.product, pledge);
    },
    onClosePledgePopup() {
      this.pledgePopup = false;
      this.selectedPledge = null;
    }
  }
};
</script>

<style scoped></style>
