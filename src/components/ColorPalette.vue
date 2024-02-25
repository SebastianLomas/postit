<script setup lang="ts">
import { postItColor } from '../utils'

const changeSelectedColor = function(ev : MouseEvent) {
  const selection : HTMLDivElement | null = ev.target as HTMLDivElement;

  if(selection !== null && selection.classList[0] !== "colorPalette") {
    const previouseColorSelected : HTMLDivElement = document.querySelector(".border-selected") as HTMLDivElement;
    const selectedColor : string = selection.classList[1];

    previouseColorSelected.classList.remove("border-selected")

    switch(previouseColorSelected.classList[1]) {
      case "bg-yellow":
        previouseColorSelected.classList.add("border-yellow");
        break;
      
      case "bg-green":
        previouseColorSelected.classList.add("border-green");
        break;
      
      case "bg-purple":
        previouseColorSelected.classList.add("border-purple");
        break;

      case "bg-red":
        previouseColorSelected.classList.add("border-red");
        break;
    }

    postItColor.value = selectedColor;
    selection.classList.add("border-selected");
  }
}
</script>

<template>
  <div class="colorPalette" @click="changeSelectedColor">
    <div class="colorPalette__color bg-red border-red"></div>
    <div class="colorPalette__color bg-yellow border-selected"></div>
    <div class="colorPalette__color bg-green border-green"></div>
    <div class="colorPalette__color bg-purple border-purple"></div>
  </div>
</template>

<style lang="scss">
@import "../utils.scss";

.colorPalette {
  display: flex;
  width: 16rem;
  height: 3rem;
  justify-content: space-evenly;
  align-self: center;

  &__color {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
  }

  &:hover {
    cursor: pointer;
  }
}

</style>