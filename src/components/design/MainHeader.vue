<template>
  <header class="main-header bg-center bg-cover">
    <div class="main-header-bg bg-gradient-to-b from-dark-gray px-6 py-8">
      <div
        v-if="mobileMenu"
        class="absolute z-40 top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-dark-gray"
      />
      <div class="flex justify-between items-center max-w-4xl mx-auto">
        <router-link
          to="/"
          :class="{ 'z-40': mobileMenu }"
        >
          <img
            src="@/assets/images/logo.svg"
            alt="Logo"
          >
        </router-link>
        <nav class="hidden md:block">
          <router-link
            to="/"
            class="text-white inline-block"
          >
            About
          </router-link>
          <router-link
            to="/"
            class="text-white inline-block ml-8"
          >
            Discover
          </router-link>
          <router-link
            to="/"
            class="text-white inline-block ml-8"
          >
            Get Started
          </router-link>
        </nav>
        <span
          v-if="!mobileMenu"
          class="cursor-pointer md:hidden"
          @click="openMobileMenu"
        >
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
        <span
          v-else
          class="z-40 cursor-pointer md:hidden"
          @click="closeMobileMenu"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <nav
          v-if="mobileMenu"
          class="z-40 md:hidden absolute left-0 right-0 top-20 mx-6 flex flex-col bg-white rounded border-light-gray"
        >
          <router-link
            to="/"
            class="font-medium text-lg p-6 border-b border-light-gray"
          >
            About
          </router-link>
          <router-link
            to="/"
            class="font-medium text-lg p-6 border-b border-light-gray"
          >
            Discover
          </router-link>
          <router-link
            to="/"
            class="font-medium text-lg p-6"
          >
            Get Started
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false
    };
  },
  methods: {
    openMobileMenu() {
      this.mobileMenu = true;
    },
    closeMobileMenu() {
      this.mobileMenu = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-header {
  background-image: url("../../assets/images/image-hero-mobile.jpg");
  height: 300px;
}

.main-header-bg {
  height: 300px;
}

@media (min-width: 640px) {
  .main-header {
    background-image: url("../../assets/images/image-hero-desktop.jpg");
    height: 400px;
  }

  .main-header-bg {
    height: 400px;
  }
}
</style>
