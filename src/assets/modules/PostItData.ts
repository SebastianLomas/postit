import { postItContext } from "../../utils";

export class PostItData {
  private id : number;
  private title : string;
  private description : string;
  private backgroundColor : string;

  constructor(title : string, description : string, backgroundColor : string, startingId : number = -1) {
    // You can indicate the starting Id, While starting Id is greater than -1
    if(startingId < 0) {
      // If there are already post its in postItContext, it takes the id of the last postIt inside postItContext
      if(postItContext.value.length) this.id = postItContext.value[postItContext.value.length - 1].Id + 1;
      // else, it would be equal to 0
      else this.id = 0;
    } else {
      this.id = startingId;
    }

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