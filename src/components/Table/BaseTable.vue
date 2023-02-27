<template>
  <div class="tableWrapper">
    <div class="table">
      <div
        class="tableHead"
        :style="{ 'grid-template-columns': columnTemplates }"
      >
        <div
          class="tableHeadName"
          v-for="(element, index) of head"
          :key="index"
          @click="clickOnHead(element)"
        >
          {{ element }}
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  head: {
    type: Array, 
    required: false,
  },
  columnTemplates: {
    type: String, 
    required: false,
  },
});

const emit = defineEmits(["sorting"]);

const clickOnHead = (name) => {
  emit("sorting", name.toLowerCase());
};


</script>

<style lang="scss" scoped>
.table {
  background-color: #fff;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 15px;
  &Wrapper {
    display: flex;
    justify-content: center;
  }
  &Head {
    padding: 5px 16px;
    display: grid;
    column-gap: 10px;
    align-items: center;
    border-bottom: 2px solid #eeeff4;
    background: #fff;
    &Name {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #999;
      cursor: pointer;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
}
</style>
