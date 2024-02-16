<script setup lang="ts"></script>

<template>
  <div class="cancelButton">
    <div class="cancelButton__triangle">
    </div>
    <span class="cancelButton__cross">x</span>
  </div>
</template>

<style lang="scss">
@import "../utils.scss";
.cancelButton {
  width: 100%;
  height: 100%;
  grid-area: button;
  position: relative;
  background-color: black;

  &__triangle {
    width: 0;
    border-top: 1.2rem solid #B6B91E;
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    transform: rotateZ(45deg);
    position: absolute;
    left: -0.8rem;
    bottom: -0.2rem;

  }
  &__cross {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    color: $whiteColor;
    position: absolute;
    top: 0.38rem;
    left: 0.25rem;
  }
}
</style>