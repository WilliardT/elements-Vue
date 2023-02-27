<script setup>
import { ref } from "vue";

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true,
  }
})

const links = ref([
 {name: 'Checkbox', href: '/checkbox'},
 {name: 'Button', href: '/button'},
 {name: 'Table', href: '/table'},
])
</script>

<template>
  <div :class="['sidebar', {sidebarIsOpen: openSidebar}]">
    <router-link 
    v-for="link in links"
    :key="link.name"
    :to="link.href"
    class="sidebarLink"
    >{{ link.name }}</router-link>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &IsOpen {
    transform: translateX(0px);
  }
  &Link {
    display: block;
    border-radius: 12px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      color: var(--primary);
    }
  }
}
</style>