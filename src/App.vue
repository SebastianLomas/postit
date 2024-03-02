<script setup lang="ts">
import { onBeforeMount } from 'vue';

import PostItViewVue from './components/PostItView.vue';
import AppHeaderVue from './components/AppHeader.vue';
import AddButtonVue from './components/AddButton.vue';
import PostItEdit from './components/PostItEdit.vue';

import { isEditMode, postItContext, POST_IT_KEY, RawPostItData } from './utils';
import { PostItData } from './assets/modules/PostItData';

const loadPostIts = function() {
  // Checks if there's stored data
  // POST_IT_KEY is the key where postits are stored in localStorage. Declared in utils.ts
  const postItRaws : string | null = localStorage.getItem(POST_IT_KEY);

  if(postItRaws) {
    const postItParsed : RawPostItData[] = JSON.parse(postItRaws);
    const tempPostItArray : PostItData[] = [];

    for(let i = 0;i < postItParsed.length;i++) {
      // Create an PostItData Object for each object stored in localStorage.
      // This solved an error that it didn't reconize this objectes as PostItData objects
      const currentPostIt : RawPostItData = postItParsed[i];
      tempPostItArray.push(new PostItData(currentPostIt.title, currentPostIt.description, currentPostIt.backgroundColor));
    }

    postItContext.value = tempPostItArray;
  }

}

const openPostItEdit = function() {
  // Sets true for editmode: It hides add button and reveal postIt Add window
  isEditMode.value = "true";
}

onBeforeMount(loadPostIts);
</script>

<template>
  <AppHeaderVue />
  <PostItEdit v-if="isEditMode === 'true'" />
  <section class="appBody">
    <!--For every PostItData object, it rendes a postit-->
    <PostItViewVue v-for="(postit) in postItContext" 
      :postItKey="postit.Id" 
      :title="postit.Title" 
      :content="postit.Description" 
      :postItColor="postit.BackgroundColor"/>
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
    bottom: 1rem;
  }
}
</style>