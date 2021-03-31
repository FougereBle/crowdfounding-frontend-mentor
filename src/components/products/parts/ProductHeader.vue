<template>
  <div class="card relative -mt-12">
    <div class="text-center">
      <img
        src="../../../assets/images/logo-mastercraft.svg"
        alt="Mastercraft"
        class="mx-auto absolute top-0 left-0 right-0 transform -translate-y-2/4"
      >
      <h1 class="mt-6 font-bold text-xl">
        {{ product.name }}
      </h1>
      <p class="mt-3 text-gray">
        {{ product.description }}
      </p>
    </div>
    <div class="mt-4 flex justify-between items-center">
      <button
        class="button primary"
        @click="backProject"
      >
        Back this project
      </button>
      <button>
        <img
          src="../../../assets/images/icon-bookmark.svg"
          alt="Bookmark"
        >
      </button>
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
  methods: {
    backProject() {
      this.$emit("onBackProject");
    }
  }
};
</script>

<style scoped></style>
