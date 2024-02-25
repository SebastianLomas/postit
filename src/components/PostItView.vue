<script setup lang="ts">
defineProps({
  title : String,
  content : String,
  postItColor : String,
  postItDarkColor : String
});
</script>

<template>
  <article :class="['postIt', postItColor]">
    <header class="postIt__header">
      <h3 class="postIt__header__title">
        {{ title }}
      </h3>
      <span class="postIt__header__close">x</span>
    </header>
    <section class="postIt__body">
      <p class="postIt__body__text">
        {{ content }}
      </p>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import "../utils.scss";
  .postIt{
    width: $postItViewSize;
    height: $postItViewSize;
    text-transform: capitalize;

    &__header {
      display: grid;
      width: 100%;
      height: 1.25rem;
      grid-template-areas: 
      "title title button";
      grid-template-columns: 1fr 1fr 1.65rem;
      margin-bottom: 1rem;
      padding-left: 0.2rem;
      
      &__title {
        width: 100%;
        height: 100%;
        grid-area: title;
        padding-top: 0.1rem;
        font-size: 1.25rem;
      }

      &__close {
        @include closeButton();
      }

      &__close:hover {
        cursor: pointer;
        transition: 200ms;
        background-color: rgba($darkColor, $alpha: 0.5);
      }
    }

    &__body {
      width: 100%;
      min-height: 1rem;
      max-height: 12.5rem;
    }
  }
</style>