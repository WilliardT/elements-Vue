<script setup>
import { ref } from 'vue'
import Checkbox from '@/components/checkbox/Checkbox.vue'
import CheckboxGroup from '@/components/checkbox/CheckboxGroup.vue'

const checkboxActive = ref(true)
const checkboxDisabled = ref(true)
const checkboxDisabledChaked = ref(true)

const dataCheckBox = ref([
  {name: 'Alena', id: 'h1'},
  {name: 'Valera', id: 'h2'},
  {name: 'Antip', id: 'h3'},
  {name: 'Izabel', id: 'h4'},
])

const selectedDataCheckBox = ref(['h1', 'h3'])

</script>

<template>
  <h1>Checkbox</h1>
  <h2>Active:</h2>
  <div class="line">
    <Checkbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="like"
      v-model:checked="checkboxActive"
    />
  </div>
  <h2>Disabled:</h2>
  <div class="line">
    <Checkbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="like"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChaked"
    />
  </div>
  <h2>CheckBox Group:</h2>
  <div class="line lineBlock">
    <p>Selected: {{ selectedDataCheckBox }}</p>
    <CheckboxGroup v-model:value="selectedDataCheckBox" name="people" :options="dataCheckBox"/>
  </div>
</template>