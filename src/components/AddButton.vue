<script setup lang="ts">
const props = defineProps({
  symbol : String
});
</script>

<template>
  <div class="addPostIt">
    <span class="addPostIt__symbol">
      {{ props.symbol }}
    </span>
  </div>
</template>

<style lang="scss">
@import "../utils.scss";

.addPostIt {
  display: flex;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-size: 3rem;
  background-color: $addButtonBackgroundColor;
  color: $whiteColor;

  &__symbol {
    user-select: none;
    padding-bottom: 0.2rem;
  }

  &:hover {
    cursor: pointer;
    background-color: darken($addButtonBackgroundColor, 10%);
  }
} 
</style>