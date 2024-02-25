import { ref } from 'vue';
import { PostItData } from './assets/modules/PostItData';

export const postItContext = ref<PostItData[]>([]);

const post : PostItData = new PostItData(1, "test", "testing", "bg-green", "bg-darkGreen");
postItContext.value.push(post);

export const isEditMode = ref('false')
