<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>vue3 UI</h1>
      <h2>一个练手的UI</h2>
      <p class="actions">
        <a href="#">GitHub</a>
        <a href="#">Start</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>
<style lang="scss" scoped></style>
