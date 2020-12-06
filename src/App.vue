<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <hr />
  <router-link to="/">第一个组件</router-link>
  <router-link to="/tky">第二个组件</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>
