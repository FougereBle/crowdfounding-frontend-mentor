<template>
  <div
    class="pledge-card"
    :class="{ disabled: outOfStock, selected: isSelected }"
  >
    <div class="flex items-center">
      <button
        class="flex justify-center items-center w-6 h-6 rounded-full border border-moderate-gray"
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
  computed: {
    outOfStock() {
      return this.pledge.left === 0;
    },
    isSelected() {
      return this.value && this.value.id === this.pledge.id;
    }
  },
  methods: {
    selectPledge() {
      this.$emit("input", this.pledge);
    }
  }
};
</script>

<style scoped></style>
