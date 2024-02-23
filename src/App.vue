<script setup lang="ts">
import PostItViewVue from './components/PostItView.vue';
import AppHeaderVue from './components/AppHeader.vue';
import AddButtonVue from './components/AddButton.vue';
import PostItEdit from './components/PostItEdit.vue';

import { ref } from 'vue';

const isEditMode = ref('false')

const openPostItEdit = function() {
  // Sets true for editmode: It hides add button and reveal postIt Add window
  isEditMode.value = 'true';
}
</script>

<template>
  <AppHeaderVue />
  <PostItEdit v-if="isEditMode === 'true'" />
  <section class="appBody">
    <PostItViewVue />
    <AddButtonVue v-if="isEditMode === 'false'" class="appBody__add" id="addButton" @click="openPostItEdit"/>
  </section>
</template>

<style lang="scss">
@import "./utils.scss";

.appBody {
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: repeat(auto-fit, $postItViewSize);
  grid-template-rows: repeat(auto-fit, $postItViewSize);
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
  position: relative;

  &__add {
    margin-left: auto;
    margin-right: auto;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>