<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 转换</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/tab">Tab 选项卡</router-link>
          </li>
        </ol>
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("xxx");
    return { menuVisible };
  },
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;

  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>
