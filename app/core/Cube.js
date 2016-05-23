/**
*
* core/Cube.js
*
**/

import Lower from './echoes/Lower'
import ShapeFactory from './shapes/ShapeFactory'

export default class Cube extends PIXI.Graphics{

  /**
   * [Scene contructor]
   * @return void
   */
  constructor(x, y, size) {
    super();

    this.factory = new ShapeFactory();

    this.position = {x: x+size/2, y: y+size/2};
    this.size = size;

    this.beginFill(0xDDDDDD, .6);
    this.drawRect(-size/2, -size/2, size, size);
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
    let echo = new Lower(this, x, y);
    this.owner.scene.addChildAt(echo, 0);
    console.log('test ', this, e);
  }
}
