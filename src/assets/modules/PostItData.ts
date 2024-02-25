export class PostItData {
  id : number;
  title : string;
  description : string;
  backgroundColor : string;

  constructor(id : number, title : string, description : string, backgroundColor : string) {
    this.id = id;
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