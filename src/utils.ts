import { ref } from 'vue';
import { PostItData } from './assets/modules/PostItData';

export enum PostItModes {
  EDIT = "edit",
  CREATE = "create",
  VIEW = "view"
}

export type RawPostItData = {
  id : number,
  title : string,
  description : string,
  backgroundColor : string
}

export enum BackgroundColors {
  YELLOW = "bg-yellow",
  GREEN = "bg-green",
  RED = "bg-red",
  PURPLE = "bg-purple"
}

export const postItContext = ref<PostItData[]>([]);
export const Mode = ref(PostItModes.VIEW);
// POST_IT_KEY is used to access data from localStorage
export const POST_IT_KEY = "postIts";
export const postItColor = ref('bg-yellow');

export const changeMode = function(mode : PostItModes) : void {
  Mode.value = mode;
}

