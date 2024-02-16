<script setup lang="ts">
</script>

<template>
  <article class="postIt bg-yellow">
    <header class="postIt__header">
      <h3 class="postIt__header__title">
        Postit Title
      </h3>
    </header>
    <section class="postIt__body">
      <p class="postIt__body__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse natus quidem error ab?
      </p>
    </section>
  </article>
</template>

<style lang="scss">
  @import "../utils.scss";
  .postIt{
    width: 12.5rem;
    height: 12.5rem;
    padding: 0.3rem 0.1rem;

    &__header {
      width: 100%;
      height: 1.25rem;
      margin-bottom: 1rem;
      
      &__title {
        width: 90%;
        font-size: 1.25rem;
      }
    }

    &__body {
      width: 100%;
      min-height: 1rem;
      max-height: 12.5rem;
    }
  }
</style>