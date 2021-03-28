<template>
  <div class="bg-white relative rounded-lg md:pt-6 md:px-6">
    <div class="flex flex-col md:flex-row md:items-center">
      <div class="text-center p-6 flex-1 md:text-left md:px-12">
        <strong class="font-bold text-3xl block">
          ${{ numberWithCommas(product.goal.backed) }}
        </strong>
        <span class="text-sm block text-dark-grey mt-2">
          of ${{ numberWithCommas(product.goal.goal) }} backed
        </span>
      </div>
      <div class="w-1/4 h-px bg-gray-300 mx-auto md:w-px md:h-16" />
      <div class="text-center p-6 flex-1 md:text-left md:px-12">
        <strong class="font-bold text-3xl block">
          {{ numberWithCommas(product.goal.backers) }}
        </strong>
        <span class="text-sm block text-dark-grey mt-2">
          total backers
        </span>
      </div>
      <div class="w-1/4 h-px bg-gray-300 mx-auto md:w-px md:h-16" />
      <div class="text-center p-6 flex-1 md:text-left md:px-12">
        <strong class="font-bold text-3xl block">
          {{ product.goal.daysLeft }}
        </strong>
        <span class="text-sm block text-dark-grey mt-2">
          days left
        </span>
      </div>
    </div>
    <div class="pb-6 md:pb-12">
      <div class="rounded-lg bg-gray-100 h-3 mx-6">
        <div
          class="rounded-lg bg-moderate-cyan h-3"
          :style="{ width: percentageProgress + '%' }"
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
    percentageProgress() {
      const percentage =
        (100 * this.product.goal.backed) / this.product.goal.goal;
      return percentage > 100 ? 100 : percentage;
    }
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>

<style scoped></style>
