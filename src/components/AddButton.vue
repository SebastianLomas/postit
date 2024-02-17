<script setup lang="ts">

</script>

<template>
  <div class="addPostIt">
    <span class="addPostIt__symbol">
      +
    </span>
  </div>
</template>

<style lang="scss">
@import "../utils.scss";

.addPostIt {
  display: flex;
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: $addButtonBackgroundColor;
  position: fixed;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 1rem;

  &:hover {
    cursor: pointer;
  }

  &__symbol {
    font-size: 4rem;
    line-height: 4rem;
    text-align: center;
    color: $whiteColor;
    user-select: none;
  }
}
</style>