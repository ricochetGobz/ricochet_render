/**
*
* core/Cube.js
*
**/

import Lower from './echoes/Lower'

export default class Cube extends PIXI.Graphics{

  /**
   * [Scene contructor]
   * @return void
   */
  constructor(x, y, size) {
    super();

    this.beginFill(0xec15b6)
    this.drawRect(x, y, size, size);
    this.endFill();
    this.init(x, y);
  }

  init(x, y) {
    this.interactive = true;
    this.click = (e) => {
      this.createEcho(x, y, e);
    };
  }

  createEcho(x, y, e) {
    let echo = new Lower(x, y);
    this.owner.scene.addChildAt(echo, 0);
    console.log('test ', this, e);
  }
}
