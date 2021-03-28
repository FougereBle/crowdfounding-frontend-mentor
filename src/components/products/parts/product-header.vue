<template>
  <header class="bg-white p-6 pt-12 -mt-20 relative rounded-lg md:p-12">
    <img
      src="@/assets/images/logo-mastercraft.svg"
      alt="Mastercraft"
      class="absolute left-0 right-0 top-0 transform -translate-y-2/4 mx-auto"
    >
    <h1 class="text-xl md:text-2xl font-bold text-center">
      {{ product.name }}
    </h1>
    <p class="text-center text-dark-grey mt-4">
      {{ product.description }}
    </p>
    <div class="mt-4 md:mt-10 flex justify-between items-center">
      <button
        class="cursor-pointer bg-moderate-cyan text-white font-bold rounded-full py-4 px-10 inline-block"
        @click="backProject"
      >
        Back this project
      </button>
      <span class="cursor-pointer rounded-full flex items-center bg-gray-100">
        <img
          src="@/assets/images/icon-bookmark.svg"
          alt="Bookmark"
        >
        <span
          class="hidden md:inline font-bold text-dark-grey pl-4 pr-6"
        >Bookmark</span>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  methods: {
    backProject() {
      this.$emit("onBackProject");
    }
  }
};
</script>

<style scoped></style>
