<script setup>
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutSidebar from "@/components/layout/Sidebar.vue";
import { ref } from "vue";

const isOpenMenu = ref(false);
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <div class="container">
    <div class="sidebarToggle" @click="toggleMenu">&#5125;</div>
    <LayoutHeader />
    <LayoutSidebar :openSidebar="isOpenMenu" />
    <div :class="['content', { contentFull: !isOpenMenu }]">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/global.scss";

#app {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  min-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &Full {
    margin-left: 0;
  }
}

.sidebarToggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
