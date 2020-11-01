import { Intractable } from "./Intractable";
import { Wall } from "./Wall";

export class Map {
  private walls: Wall[];
  private interactables: Intractable[];

  public static loadFile(data: any): Map {
    return new Map();
  }
}
