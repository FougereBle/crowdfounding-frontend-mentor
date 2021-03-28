<template>
  <div
    class="border-gray-200 rounded-lg"
    :class="{
      'border-moderate-cyan': isSelected,
      'border-2': isSelected,
      border: !isSelected,
      'opacity-50': isDisabled
    }"
  >
    <header class="flex items-center px-6 pt-6">
      <div
        v-if="selection"
        class="mr-4"
      >
        <label @click="selectPledge">
          <input
            type="checkbox"
            class="hidden"
            :checked="isSelected"
          >
          <div
            class="rounded-full border border-gray-300 w-6 h-6 flex justify-center items-center"
          >
            <div
              v-show="isSelected"
              class="inline-block rounded-full bg-moderate-cyan w-3 h-3"
            />
          </div>
        </label>
      </div>
      <div class="md:flex md:justify-start md:items-center w-full">
        <h3 class="font-bold">
          {{ pledge.name }}
        </h3>
        <span class="text-moderate-cyan md:ml-6">
          Pledge ${{ numberWithCommas(pledge.min) }} or more
        </span>
        <div class="hidden md:flex items-center ml-auto">
          <span
            class="font-bold text-xl mr-3"
            :class="{ 'text-4xl': !selection }"
          >
            {{ pledge.left }}
          </span>
          <span class="text-dark-grey">
            left
          </span>
        </div>
      </div>
    </header>
    <p class="mt-8 text-dark-grey px-6">
      {{ pledge.body }}
    </p>
    <footer class="mt-8 md:flex md:justify-between md:items-center px-6 pb-6">
      <div class="flex items-center md:hidden">
        <span
          class="font-bold text-xl mr-3"
          :class="{ 'text-4xl': !selection }"
        >
          {{ pledge.left }}
        </span>
        <span class="text-dark-grey">
          left
        </span>
      </div>
      <button
        v-if="!selection && !isDisabled"
        class="mt-8 cursor-pointer bg-moderate-cyan text-white font-bold rounded-full py-4 px-10 inline-block md:mt-0"
        @click="selectPledge"
      >
        Select Reward
      </button>
      <button
        v-if="!selection && isDisabled"
        class="mt-8 cursor-pointer bg-dark-grey text-white font-bold rounded-full py-4 px-10 inline-block md:mt-0"
        @click="selectPledge"
      >
        Out of Stock
      </button>
    </footer>
    <div
      v-if="isSelected"
      class="pt-6 border-t-2 border-gray-200 md:px-6 md:pb-6 md:flex justify-between items-center"
    >
      <p class="text-center text-dark-grey">
        Enter your pledge
      </p>
      <div
        class="flex justify-between items-center mt-4 px-6 pb-6 md:px-0 md:py-0 md:my-0"
      >
        <div
          class="flex-grow flex justify-between items-center border border-gray-300 p-3 rounded-full"
        >
          <strong class="font-bold text-dark-grey">
            $
          </strong>
          <input
            v-model="pledgeValue"
            type="text"
            class="w-full border-0 p-0 m-0 ml-3 text-black font-bold"
          >
        </div>
        <button
          class="ml-3 flex-grow cursor-pointer bg-moderate-cyan text-white font-bold rounded-full py-3 px-6"
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
    selection: {
      type: Boolean,
      default: false
    },
    pledge: {
      type: Object,
      default: null
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      pledgeValue: this.pledge.min
    };
  },
  computed: {
    isDisabled() {
      return this.pledge.left === 0;
    },
    isSelected() {
      return this.value === this.pledge.id;
    }
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    selectPledge() {
      if (this.isDisabled) {
        return;
      }

      this.$emit("input", this.pledge.id);
    },
    makePledge() {
      this.pledge.left -= 1;
      this.$emit("onPledge", this.pledgeValue);
    }
  }
};
</script>

<style scoped></style>
