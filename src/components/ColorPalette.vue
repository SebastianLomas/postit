<script setup lang="ts"></script>

<template>
  <div class="colorPalette">
    <div class="colorPalette__color bg-red border-red"></div>
    <div class="colorPalette__color bg-yellow border-selected"></div>
    <div class="colorPalette__color bg-green border-green"></div>
    <div class="colorPalette__color bg-purple border-purple"></div>
  </div>
</template>

<style lang="scss">
@import "../utils.scss";

.colorPalette {
  display: flex;
  width: 16rem;
  height: 3rem;
  justify-content: space-evenly;
  align-self: center;

  &__color {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
  }

  &:hover {
    cursor: pointer;
  }
}

</style>