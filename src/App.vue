<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {provide, ref} from 'vue'
export default {
  name: 'App',
  setup(){
    const menuVisible = ref()
    provide("xxx", menuVisible)
  }
}
</script>
