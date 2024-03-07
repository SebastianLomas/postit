<script setup lang="ts">
import { PostItData } from '../assets/modules/PostItData';
import { POST_IT_KEY, postItContext, saveLocally } from '../utils';

const props = defineProps({
  title : String,
  content : String,
  postItColor : String,
  postItDarkColor : String,
  postItKey : Number
});

const deletePostIt = function(ev : MouseEvent, selectedId : number | undefined) {
  if(selectedId !== undefined) {
    postItContext.value = postItContext.value.filter(postIt => postIt.Id !== selectedId);
    saveLocally(true);
  }
}
</script>

<template>
  <article :class="['postIt', props.postItColor]" :data-id="postItKey">
    <header class="postIt__header">
      <div class="postIt__header__title">
        <h3>
          {{ props.title }}
        </h3>
      </div>
      <div class="postIt__header__close" @click.stop="deletePostIt($event, props.postItKey)">
        <span>x</span>
      </div>
    </header>
    <section class="postIt__body">
      <p class="postIt__body__text">
        {{ props.content }}
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