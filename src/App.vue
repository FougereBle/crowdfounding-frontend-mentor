<template>
  <div id="app">
    <main-header />
    <router-view />
  </div>
</template>

<script>
import "./assets/css/tailwind.css";
import "./assets/css/style.css";

import MainHeader from "@/components/design/MainHeader.vue";

export default {
  components: {
    MainHeader
  }
};
</script>

<style lang="scss">
body {
  background-color: #fafafa;
}
</style>
