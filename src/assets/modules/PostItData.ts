export class PostItData {
  id : number;
  title : string;
  description : string;
  backgroundColor : string;
  darkColor : string;

  constructor(id : number, title : string, description : string, backgroundColor : string, darkColor : string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.backgroundColor = backgroundColor;
    this.darkColor = darkColor;
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

  getDarkColor() {
    return this.darkColor;
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

  setDarkColor(darkColor : string) {
    this.darkColor = darkColor;
  }
}