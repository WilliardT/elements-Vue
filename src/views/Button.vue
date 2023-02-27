<script setup>
import Button from "@/components/Button.vue";
</script>

<template>
  <h1>Button elem</h1>
  <h2>Colors:</h2>
  <div class="line">
    <Button label="Primary" color="primary" />
    <Button label="Secondary" color="second" />
    <Button label="Success" color="success" />
    <Button label="Info" color="info" />
    <Button label="Warning" color="warning" />
    <Button label="Danger" color="danger" />
  </div>
  <h2>Rounded:</h2>
  <div class="line">
    <Button label="Primary" color="primary" :rounded="true" />
    <Button label="Secondary" color="second" :rounded="true" />
    <Button label="Success" color="success" :rounded="true" />
    <Button label="Info" color="info" :rounded="true" />
    <Button label="Warning" color="warning" :rounded="true" />
    <Button label="Danger" color="danger" :rounded="true" />
  </div>
  <h2>Disabled:</h2>
  <div class="line">
    <Button label="Primary" color="primary" :disabled="true" />
    <Button label="Secondary" color="second" :rounded="true" :disabled="true" />
  </div>
  <h2>Outline:</h2>
  <div class="line">
    <Button label="Primary" color="primary" :outlined="true" />
    <Button label="Secondary" color="second" :outlined="true" />
    <Button label="Success" color="success" :outlined="true" />
    <Button label="Info" color="info" :outlined="true" />
    <Button label="Warning" color="warning" :outlined="true" />
    <Button label="Danger" color="danger" :outlined="true" />
  </div>
  <h2>Icons:</h2>
  <div class="line">
    <Button color="primary" icon="heart"/>
    <Button label="Secondary" color="second" icon="hand"/>
    <Button label="Success" color="success" icon="address-book"/>
    <Button label="Info" color="info" :outlined="true" icon="credit-card"/>
    <Button label="Warning" color="warning" :outlined="true" icon="lemon"/>
    <Button label="Danger" color="danger" :outlined="true" icon="hourglass"/>
  </div>
</template>

<style lang="scss" scoped>
.line {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
