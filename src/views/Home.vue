<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>vue3 UI</h1>
      <h2>一个练手的UI</h2>
      <p class="actions">
        <a href="https://github.com/starrytky/vue3-ui-1">GitHub</a>
        <routerLink to="/doc">Start</routerLink>
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
<style lang="scss" scoped>
.banner{
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
