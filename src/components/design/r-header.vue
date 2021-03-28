<template>
  <header class="main-header bg-center bg-cover px-6 py-8">
    <div class="flex justify-between items-center">
      <router-link to="/">
        <img
          src="@/assets/images/logo.svg"
          alt="Logo"
        >
      </router-link>
      <span class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="text-white w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </span>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-header {
  background-image: url("../../assets/images/image-hero-mobile.jpg");
  height: 300px;
}
</style>
