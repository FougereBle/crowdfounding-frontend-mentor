<template>
  <div
    id="app"
    class="font-body"
  >
    <r-header />
    <router-view />
  </div>
</template>

<script>
import "./assets/css/tailwind.css";
import "./assets/css/style.css";

import RHeader from "@/components/design/r-header.vue";

export default {
  components: {
    RHeader
  }
};
</script>

<style lang="scss">
body {
  background-color: #fafafa;
}
</style>
