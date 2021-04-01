<template>
  <div
    class="pledge-card"
    :class="{ disabled: outOfStock }"
  >
    <div class="md:flex md:justify-between md:items-center">
      <h3 class="font-bold">
        {{ pledge.name }}
      </h3>
      <p class="mt-2 text-cyan font-medium">
        Pledge ${{ pledge.min }} or more
      </p>
    </div>
    <p class="mt-6 text-gray">
      {{ pledge.body }}
    </p>
    <div class="md:flex md:justify-between md:items-center">
      <div class="mt-6 flex items-center">
        <span class="font-bold text-4xl">
          {{ pledge.left }}
        </span>
        <span class="text-gray ml-2">
          left
        </span>
      </div>
      <div class="mt-6">
        <button
          v-if="!outOfStock"
          class="button primary"
          @click="selectPledge"
        >
          Select Reward
        </button>
        <button
          v-if="outOfStock"
          class="button primary"
          disabled
        >
          Out of Stock
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pledge: {
      type: Object,
      default: null
    }
  },
  computed: {
    outOfStock() {
      return this.pledge.left === 0;
    }
  },
  methods: {
    selectPledge() {
      this.$emit("onSelectPledge", this.pledge);
    }
  }
};
</script>

<style scoped></style>
