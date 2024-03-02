<script setup lang="ts">
import { onMounted } from 'vue';
import { postItColor, BackgroundColors } from '../utils';

const getInitialSelectedColor = function() {
  // When the post it edit is opened for the first time, applies the border selected color
  // to the current color. This solved an error that affected the color palette and the selected color.
  const selectedColor : string = postItColor.value;
  let color : HTMLDivElement | null = null;

  switch(selectedColor) {
    // Based on the background color, it removes the same color border
    // and applies the selected border.
    case BackgroundColors.YELLOW:
      color = document.querySelector(".border-yellow") as HTMLDivElement;
      color.classList.remove("border-yellow");
      color.classList.add("border-selected");
      break;

      case BackgroundColors.GREEN:
      color = document.querySelector(".border-green") as HTMLDivElement;
      color.classList.remove("border-green");
      color.classList.add("border-selected");
      break;

      case BackgroundColors.RED:
      color = document.querySelector(".border-red") as HTMLDivElement;
      color.classList.remove("border-red");
      color.classList.add("border-selected");
      break;

      case BackgroundColors.PURPLE:
      color = document.querySelector(".border-purple") as HTMLDivElement;
      color.classList.remove("border-purple");
      color.classList.add("border-selected");
      break;
  }
}

const changeSelectedColor = function(ev : MouseEvent) {
  // Selects the current color element
  const selection : HTMLDivElement | null = ev.target as HTMLDivElement;

  // if "selection" is not null and it isn't the parent element
  if(selection !== null && selection.classList[0] !== "colorPalette") {
    // Choices the previous selected color
    const previouseColorSelected : HTMLDivElement = document.querySelector(".border-selected") as HTMLDivElement;
    // and its color classname
    const selectedColor : string = selection.classList[1];

    // Removes the border selected to the last selected color
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

    // Changes the value so the new color can be render
    postItColor.value = selectedColor;
    selection.classList.add("border-selected");
  }
}

onMounted(() => {
  getInitialSelectedColor();
})
</script>

<template>
  <div class="colorPalette" @click="changeSelectedColor">
    <div class="colorPalette__color bg-yellow border-yellow"></div>
    <div class="colorPalette__color bg-green border-green"></div>
    <div class="colorPalette__color bg-red border-red"></div>
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