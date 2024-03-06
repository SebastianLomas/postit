<script setup lang="ts">
import { POST_IT_KEY, postItContext, saveLocally } from '../utils';

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
    saveLocally(true);
    /*localStorage.clear();
    localStorage.setItem(POST_IT_KEY, JSON.stringify(postItContext.value));*/
  }
}
</script>

<template>
  <article :class="['postIt', postItColor]" :data-id="postItKey">
    <header class="postIt__header">
      <div class="postIt__header__title">
        <h3>
          {{ title }}
        </h3>
      </div>
      <div class="postIt__header__close" @click.stop="deletePostIt">
        <span>x</span>
      </div>
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

  .postIt {
    display: grid;
    width: $postItViewSize;
    height: $postItViewSize;
    grid-template-columns: 100%;
    grid-template-rows: 3rem calc(100% - 3rem);

    &__header {
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-columns: 80% 20%;
      grid-template-rows: 100%;
      
      &__title {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding-left: 0.2rem;
        text-transform: capitalize;

        h3 {
          font-size: 1.5rem;
        }
      }

      &__close {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        user-select: none;

        &:active {
          background-color: rgba($darkColor, $alpha: 0.5);
          color: $whiteColor;
        }

        span {
          font-weight: bold;
        }
      }
    }

    &__body {
      width: 100%;
      height: 100%;
      max-height: $postItViewSize;
      padding: 0 0.2rem;
      word-break: break-all;
      overflow-x: none;
      overflow-y: scroll;
      scrollbar-width: thin;
      scrollbar-color: $darkColor rgba($darkColor, 0.1);

      &__text {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>