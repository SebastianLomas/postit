<script setup lang="ts">
import AddButton from './AddButton.vue';

</script>

<template>
  <section class="postItEdit">
    <article class="postItEdit__form bg-yellow">
      <header class="postItEdit__form__header">
        <label class="postItEdit__form__header__title" for="postItTitle">
          <input type="text" name="postItTitle" id="postItTitle">
        </label>
        <span class="postItEdit__form__header__close">
          x
        </span>
      </header>
      <section class="postItEdit__form__body">
        <label class="postItEdit__form__body__input" for="postItText">
          <textarea name="postItText" id="postItText"></textarea>
        </label>
        <AddButton />
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
          background-color: $darkYellowColor;
        }

        input:focus {
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
          background-color: $darkYellowColor;
        }
      }
    }
  }
}
</style>