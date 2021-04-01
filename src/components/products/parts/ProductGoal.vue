<template>
  <div class="card">
    <div class="text-center md:flex md:items-center md:text-left">
      <div class="pt-2 pb-6 md:p-0 md:w-full">
        <span class="block text-4xl font-bold">
          ${{ product.goal.backed }}
        </span>
        <span class="block text-gray mt-2">
          of ${{ product.goal.goal }} backed
        </span>
      </div>
      <div
        class="mx-auto w-20 h-px bg-black opacity-10 md:h-20 md:w-px md:mx-12"
      />
      <div class="py-6 md:p-0 md:w-full">
        <span class="block text-4xl font-bold">
          {{ product.goal.backers }}
        </span>
        <span class="block text-gray mt-2">
          total backers
        </span>
      </div>
      <div
        class="mx-auto w-20 h-px bg-black opacity-10 md:h-20 md:w-px md:mx-12"
      />
      <div class="pt-6 pb-8 md:p-0 md:w-full">
        <span class="block text-4xl font-bold">
          {{ product.goal.daysLeft }}
        </span>
        <span class="block text-gray mt-2">
          days left
        </span>
      </div>
    </div>
    <div class="md:mt-10">
      <div class="bg-light-gray rounded-full h-3">
        <div
          class="bg-cyan rounded-full h-3"
          :style="{ width: progressPercentage + '%' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  computed: {
    progressPercentage() {
      const backed = this.product.goal.backed;
      const goal = this.product.goal.goal;

      const percentage = (backed * 100) / goal;

      return this.minMax(percentage, 0, 100);
    }
  },
  methods: {
    minMax(value, min, max) {
      return value < min ? min : value > max ? max : value;
    }
  }
};
</script>

<style scoped></style>
