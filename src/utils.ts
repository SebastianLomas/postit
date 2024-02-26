import { ref } from 'vue';
import { PostItData } from './assets/modules/PostItData';

export const postItContext = ref<PostItData[]>([]);
export const isEditMode = ref('false');
export const postItKey = "postIts";
export const postItColor = ref('bg-yellow');

