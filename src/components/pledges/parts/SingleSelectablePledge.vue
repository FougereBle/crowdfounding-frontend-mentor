<template>
  <div
    class="pledge-card"
    :class="{ disabled: outOfStock, selected: isSelected }"
  >
    <div class="flex items-center">
      <button
        class="flex justify-center items-center w-6 h-6 rounded-full border border-moderate-gray"
        :disabled="outOfStock"
        @click="selectPledge"
      >
        <span
          v-if="isSelected"
          class="bg-cyan rounded-full w-3 h-3"
        />
      </button>
      <div class="ml-4">
        <h3 class="font-bold">
          {{ pledge.name }}
        </h3>
        <p class="mt-2 text-cyan font-medium">
          Pledge ${{ pledge.min }} or more
        </p>
      </div>
    </div>
    <p class="mt-6 text-gray">
      {{ pledge.body }}
    </p>
    <div class="mt-6 flex items-center">
      <span class="font-bold text-lg">
        {{ pledge.left }}
      </span>
      <span class="text-gray ml-2">
        left
      </span>
    </div>
    <div
      v-if="isSelected"
      class="mt-6"
    >
      <div class="h-px bg-moderate-gray -ml-6 -mr-6" />
      <p class="text-center mt-6 text-gray">
        Enter your pledge
      </p>
      <div class="mt-4 flex items-center">
        <div
          class="flex-shrink border border-moderate-gray rounded-full px-6 py-4 flex"
        >
          <span class="font-bold text-gray">
            $
          </span>
          <input
            v-model="amount"
            type="text"
            class="ml-2 font-bold w-full"
          >
        </div>
        <button
          class="flex-shrink button primary small ml-4"
          @click="makePledge"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: null
    },
    pledge: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      amount: this.pledge.min
    };
  },
  computed: {
    outOfStock() {
      return this.pledge.left === 0;
    },
    isSelected() {
      if (this.outOfStock) {
        return false;
      }

      return this.value && this.value.id === this.pledge.id;
    }
  },
  methods: {
    selectPledge() {
      if (this.outOfStock) {
        return;
      }

      this.$emit("input", this.pledge);
    },
    makePledge() {
      this.$emit("onMakePledge", this.pledge, this.amount);
    }
  }
};
</script>

<style scoped></style>
