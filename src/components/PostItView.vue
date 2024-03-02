<script setup lang="ts">
import { POST_IT_KEY, postItContext } from '../utils';

defineProps({
  title : String,
  content : String,
  postItColor : String,
  postItDarkColor : String,
  postItKey : Number
});

const deletePostIt = function(ev : MouseEvent) {
  // Getting the "X" that is clicked
  const postItX : HTMLSpanElement = ev.target as HTMLSpanElement;
  // Getting the actual post it
  const postItTarget : HTMLDivElement | null | undefined = postItX.parentElement?.parentElement as HTMLDivElement;

  if(postItTarget !== null && postItTarget !== undefined) {
    // Gets the id given to the element from data-id
    const postItTargetId : string | undefined = postItTarget.dataset.id;
    // If the id taken form data-id is equal to the Id of the elemento of the array of postits
    // it is no saved
    // Looped inside a normal constant to avoid multiple renders
    const postItContextTemp = postItContext.value.filter(element => element.Id.toString() !== postItTargetId)
    postItContext.value = postItContextTemp;

    // Cleaning and saving postit array in local storage
    localStorage.clear();
    localStorage.setItem(POST_IT_KEY, JSON.stringify(postItContext.value));
  }
}
</script>

<template>
  <article :class="['postIt', postItColor]" :data-id="postItKey">
    <header class="postIt__header">
      <h3 class="postIt__header__title">
        {{ title }}
      </h3>
      <span class="postIt__header__close" @click="deletePostIt">x</span>
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