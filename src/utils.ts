import { ref } from 'vue';
import { PostItData } from './assets/modules/PostItData';

export const postItContext = ref<PostItData[]>([]);
export let postItIds = 0;
export const isEditMode = ref('false');
export const postItKey = "postIts";

export const savePostIt = function() {
  const postItArrays : PostItData[] = postItContext.value;
  localStorage.setItem('postIts', JSON.strinify([...postItArrays]));
  console.log(postItArrays);
}
