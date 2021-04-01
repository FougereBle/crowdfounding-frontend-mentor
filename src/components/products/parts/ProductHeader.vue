<template>
  <div class="card">
    <div class="text-center">
      <img
        src="../../../assets/images/logo-mastercraft.svg"
        alt="Mastercraft"
        class="mx-auto absolute top-0 left-0 right-0 transform -translate-y-2/4"
      >
      <h1 class="mt-6 font-bold text-xl md:mt-3">
        {{ product.name }}
      </h1>
      <p class="mt-3 text-gray">
        {{ product.description }}
      </p>
    </div>
    <div class="mt-4 flex justify-between items-center md:mt-10">
      <button
        class="button primary"
        @click="backProject"
      >
        Back this project
      </button>
      <button
        v-if="!bookmarked"
        class="flex items-center rounded-full bg-light-gray"
        @click="toggleBookmark"
      >
        <img
          src="../../../assets/images/icon-bookmark.svg"
          alt="Bookmark"
        >
        <span class="hidden md:block ml-4 mr-6 font-bold text-gray">
          Bookmark
        </span>
      </button>
      <button
        v-if="bookmarked"
        class="flex items-center rounded-full bg-light-cyan"
        @click="toggleBookmark"
      >
        <img
          src="../../../assets/images/icon-bookmarked.svg"
          alt="Bookmark"
        >
        <span class="hidden md:block ml-4 mr-6 font-bold text-dark-cyan">
          Bookmarked
        </span>
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
  data() {
    return {
      bookmarked: false
    };
  },
  methods: {
    backProject() {
      this.$emit("onBackProject");
    },
    toggleBookmark() {
      this.bookmarked = !this.bookmarked;
    }
  }
};
</script>

<style scoped></style>
