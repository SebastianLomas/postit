import { postItContext } from "../../utils";

export class PostItData {
  id : number;
  title : string;
  description : string;
  backgroundColor : string;

  constructor(title : string, description : string, backgroundColor : string) {
    if(postItContext.value.length) {
      this.id = postItContext.value[postItContext.value.length - 1].id + 1;
    } else {
      this.id = 0;
    }
    this.title = title;
    this.description = description;
    this.backgroundColor = backgroundColor;
  }

  getTitle() {
    return this.title
  }

  getDescription() {
    return this.description;
  }

  getBackgroundColor() {
    return this.backgroundColor;
  }

  setTitle(title : string) {
    this.title = title;
  }

  setDescription(description : string) {
    this.description = description;
  }

  setBackground(backgroundColor : string) {
    this.backgroundColor = backgroundColor;
  }
}