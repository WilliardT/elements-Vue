<script setup>
import Button from "@/components/Button.vue";

const eventForButton = () => {
  alert("you click button");
};
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
    <Button label="Primary" color="primary" rounded/>
    <Button label="Secondary" color="second" rounded/>
    <Button label="Success" color="success" rounded/>
    <Button label="Info" color="info" rounded/>
    <Button label="Warning" color="warning" rounded/>
    <Button label="Danger" color="danger" rounded/>
  </div>
  <h2>Disabled:</h2>
  <div class="line">
    <Button label="Primary" color="primary" disabled/>
    <Button label="Secondary" color="second" rounded disabled/>
  </div>
  <h2>Outline:</h2>
  <div class="line">
    <Button label="Primary" color="primary" outlined />
    <Button label="Secondary" color="second" outlined />
    <Button label="Success" color="success" outlined />
    <Button label="Info" color="info" outlined />
    <Button label="Warning" color="warning" outlined />
    <Button label="Danger" color="danger" outlined />
  </div>
  <h2>Icons:</h2>
  <div class="line">
    <Button color="Primary" icon="heart" />
    <Button label="Secondary" color="second" icon="hand" />
    <Button label="Success" color="success" icon="address-book" />
    <Button label="Info" color="info" outlined icon="credit-card" />
    <Button label="Warning" color="warning" outlined icon="lemon" />
    <Button label="Danger" color="danger" outlined icon="hourglass" />
  </div>
  <h2>Size:</h2>
  <div class="line">
    <Button label="Normal" color="second" />
    <Button label="Large" color="success" size="large" />
  </div>
  <h2>Event:</h2>
  <div class="line">
    <Button label="@click" color="second" @clickToButton="eventForButton" />
  </div>
</template>

