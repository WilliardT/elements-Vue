<template>
  <div
  class="tableRow"
  :style="{ 'grid-template-columns': columnTemplates }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  columnTemplates: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.tableRow {
  border-bottom: 2px solid #EEEFF4;
  position: relative;
  display: grid;
  column-gap: 10px;
  align-items: center;
  padding: 0 16px;
  @media screen and (max-width: 767px) {
    display: block;
  }
  &:last-child {
    border-bottom: none;
  }
  &--items-center {
    justify-items: center;
  }
}
</style>