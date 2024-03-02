import { postItContext } from "../../utils";

export class PostItData {
  private id : number;
  private title : string;
  private description : string;
  private backgroundColor : string;

  constructor(title : string, description : string, backgroundColor : string) {
    if(postItContext.value.length) this.id = postItContext.value[postItContext.value.length - 1].Id + 1;
    else this.id = 0;
    this.title = title;
    this.description = description;
    this.backgroundColor = backgroundColor;
  }

  public get Id() : number {
    return this.id;
  }

  public get Title() {
    return this.title
  }

  public get Description() {
    return this.description;
  }

  public get BackgroundColor() {
    return this.backgroundColor;
  }

  public set Title(title : string) {
    this.title = title;
  }

  public set Description(description : string) {
    this.description = description;
  }

  public set Background(backgroundColor : string) {
    this.backgroundColor = backgroundColor;
  }
}