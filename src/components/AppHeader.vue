<script setup lang="ts"></script>

<template>
  <header class="header">
    <h1 class="header__logo">
      POSTiT<span class="header__logo--com">.COM</span>
    </h1>
  </header>
</template>

<style lang="scss">
@import "../utils.scss";

.header {
  display: flex;
  width: 100%;
  height: 5rem;
  align-items: center;
  padding-left: 0.2rem;

  &__logo {
    font-size: 3rem;
    font-family: $logoFont;
    color: $whiteColor;

    &--com {
      color: $yellowColor;
    }
  }
}
</style>