<script setup lang="ts">
import AddButton from './AddButton.vue';
import ColorPalette from './ColorPalette.vue';
import { isEditMode, postItContext, postItKey, postItColor } from '../utils';
import { PostItData } from '../assets/modules/PostItData';

const closeEditMode = function() {
  isEditMode.value = "false";
}

const createPostIt = function() {
  const inputTitle : HTMLInputElement | null = document.querySelector("#postItTitle");
  const inputText : HTMLInputElement | null = document.querySelector("#postItText");
  const selectedColor : HTMLDivElement | null = document.querySelector(".border-selected");

  // If the input and their values are null or void string, it won't work
  if((inputTitle !== null && inputTitle.value !== "") && (inputText !== null && inputText.value !== "") && selectedColor !== null) {
    const selectedColorClass : string = selectedColor.classList[1];
    const postItIds = postItContext.value.length;
    postItContext.value.push(new PostItData(postItIds, inputTitle?.value, inputText?.value, selectedColorClass));
    localStorage.setItem(postItKey, JSON.stringify(postItContext.value));
    closeEditMode();
  }
}

</script>

<template>
  <section class="postItEdit">
    <article :class="['postItEdit__form', postItColor]">
      <header class="postItEdit__form__header">
        <label class="postItEdit__form__header__title" for="postItTitle">
          <input type="text" name="postItTitle" id="postItTitle">
        </label>
        <span class="postItEdit__form__header__close" @click="closeEditMode">
          x
        </span>
      </header>
      <section class="postItEdit__form__body">
        <label class="postItEdit__form__body__input" for="postItText">
          <textarea name="postItText" id="postItText"></textarea>
        </label>
        <div class="postItEdit__form__body__config">
          <ColorPalette />
          <AddButton @click="createPostIt" />
        </div>
      </section>
    </article>
  </section>
</template>

<style lang="scss">
@import '../utils.scss';

.postItEdit {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: $addPostItColorBackgroundColor;
  left: 0;
  top: 0;
  z-index: 99;

  &__form {
    width: 31.25rem;
    height: 31.25rem;

    &__header {
      display: grid;
      grid-template-columns: 80% 20%;
      grid-template-rows: 100%;
      width: 100%;
      height: 4rem;

      &__title {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;

        input {
          display: block;
          width: 90%;
          height: 80%;
          font-size: 1.5rem;
          padding: 0 0.5rem;
          border-radius: 0.2rem;
          border-bottom: 0.25rem solid transparent;
          background-color: rgba($darkColor, $alpha: 0.1);
        }

        input:focus {
          transition: 500ms;
          border-bottom: 0.25rem solid $whiteColor;
        }
      }

      &__close {
        @include closeButton();
      }

    }

    &__body {
      display: flex;
      width: 100%;
      height: 80%;
      flex-direction: column;
      align-items: center;
      position: relative;

      &__input {
        display: block;
        width: 92%;
        height: 80%;

        textarea {
          display: block;
          width: 28.75rem;
          min-height: 2rem;
          resize: none;
          font-size: 1.5rem;
          padding: 0.3rem 0.5rem;
          border-radius: 0.2rem;
          border-bottom: 0.25rem solid transparent;
          background-color: rgba($darkColor, $alpha: 0.1);

          &:focus {
            transition: 500ms;
            border-bottom: 0.25rem solid $whiteColor;
          }
        }
      }

      &__config {
        display: flex;
        width: 92%;
        height: 20%;
        justify-content: space-between;
      }
    }
  }
}
</style>