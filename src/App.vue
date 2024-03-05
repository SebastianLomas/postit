<script setup lang="ts">
import { onBeforeMount } from 'vue';

import PostItViewVue from './components/PostItView.vue';
import AppHeaderVue from './components/AppHeader.vue';
import AddButtonVue from './components/AddButton.vue';
import PostItEdit from './components/PostItEdit.vue';

import { Mode, PostItModes, changeMode, postItContext, POST_IT_KEY, RawPostItData } from './utils';
import { PostItData } from './assets/modules/PostItData';

let selectedPostIt : RawPostItData = {
  id: -1,
  title: "",
  description: "",
  backgroundColor: ""
}

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
      tempPostItArray.push(new PostItData(currentPostIt.title, currentPostIt.description, currentPostIt.backgroundColor, currentPostIt.id));
    }

    postItContext.value = tempPostItArray;
  }

}

const launchEditMode = function(ev : MouseEvent) {
  // Gets Post It Element
  const postItSelected : HTMLDivElement | null | undefined = ev.target as HTMLDivElement;

  if(postItSelected) {
    // Gets Id set in data-id
    const selectedId : number = parseInt(postItSelected.dataset.id ?? "-1");

    // If it's less than 0, it won't work 
    if(selectedId >= 0) {
      // Loops through the postits until it finds the postit with the same id as selectedId
      for(let i = 0;i < postItContext.value.length;i++) {
        const postIt = postItContext.value[i];

        if(postIt.Id === selectedId) {
          // Once found, assigned value to selectedPostIt, where props are stored
          selectedPostIt.id = postIt.Id;
          selectedPostIt.title = postIt.Title;
          selectedPostIt.description = postIt.Description;
          selectedPostIt.backgroundColor = postIt.BackgroundColor;
        }
      }


      changeMode(PostItModes.EDIT);
    }
  }
  
}

onBeforeMount(loadPostIts);
</script>

<template>
  <section class="appBody">
    <AppHeaderVue />
    <PostItEdit v-if="Mode === PostItModes.CREATE" />
    <PostItEdit v-else-if="Mode === PostItModes.EDIT" 
      :title="selectedPostIt.title" 
      :description="selectedPostIt.description" 
      :backgroundColor="selectedPostIt.backgroundColor" />
    <section class="appBody__content">
      <!--For every PostItData object, it rendes a postit-->
      <PostItViewVue v-for="(postit) in postItContext" 
        :postItKey="postit.Id" 
        :title="postit.Title" 
        :content="postit.Description" 
        :postItColor="postit.BackgroundColor"
        @click="launchEditMode" 
      />
      <AddButtonVue v-if="Mode === PostItModes.VIEW" 
        class="appBody__addButton" id="addButton" 
        symbol="&#43;"
        @click="changeMode(PostItModes.CREATE)"
      />
    </section>
  </section>
</template>

<style lang="scss">
@import "./utils.scss";

.appBody {
  display: grid;
  width: 100%;
  height: 100dvh;
  grid-template-columns: 100%;
  grid-template-rows: 5rem 1fr;
  position: relative;

  &__content {
    display: grid;
    width: 100%;
    height: 100%;
    justify-content: center;
    justify-items: center;
    align-items: baseline;
  }

  &__addButton {
    position: fixed;
    right: 0.5rem;
    bottom: 1rem;
    z-index: 99;
  }
}

@media (max-width: $maxMobileResolution) {
  .appBody__content {
    grid-template-columns: 14rem;
    grid-template-rows: repeat(auto-fill, 14rem);
    padding-top: 0.5rem;
    row-gap: 0.5rem
  }
}

@media (min-width: $maxMobileResolution) {
  .appBody__content {
    grid-template-columns: repeat(auto-fill, 14rem);
    grid-template-rows: repeat(auto-fill, 14rem);
    gap: 0.5rem;
  }
}

@media(min-width: $maxTabletResolution) {

}
/*.appBody {
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
}*/
</style>