<template>
  <div class="tableColumn">
    <span class="tableColumnTitle" v-if="columnTitle">{{ columnTitle }}: </span>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  columnTitle: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.tableColumn {
  padding: 15px 0;
  position: relative;
  &-image {
    max-width: 100%;
    @media screen and (max-width: 767px) {
      max-width: 200px;
    }
  }
  &Title {
    margin-right: 5px;
    display: none;
    @media screen and (max-width: 767px) {
      display: inline-block;
    }
  }
}
</style>
