/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2020 Digitsensitive
 * @description  Game Of Life: Cell
 * @license      Digitsensitive
 */

export class Cell {
  private value: boolean;
  private position: Phaser.Math.Vector2;
  private valueHasChanged: boolean;

  constructor(x: number, y: number, v: boolean) {
    this.value = v;
    this.position = new Phaser.Math.Vector2(x, y);
    this.valueHasChanged = false;
  }

  public isAlive(): boolean {
    return this.value;
  }

  public getPosition(): Phaser.Math.Vector2 {
    return this.position;
  }

  public setValue(v: boolean): void {
    this.value = v;
  }

  public setValueChange(): void {
    this.valueHasChanged = true;
  }

  public changeValue(): boolean {
    return this.valueHasChanged;
  }

  public setValueToFalse(): void {
    this.valueHasChanged = false;
  }
}
