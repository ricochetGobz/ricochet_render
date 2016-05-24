/**
*
* core/echoes/Lower.js
*
**/

import Factory from '../shapes/ShapeFactory';
import Shapes from '../echoes/lower-data';

const colors = [0xa8539b, 0x2ac0d1];
const gradients = [{start:0xdcd3f0, end:0x79d8ed},
                  {start:0x9272a5, end:0x3951b0},
                  {start:0x5daae1, end:0x76c1c6}];

const cubeSize = 200;

export default class Lower extends PIXI.Container{

  /**
   * [Scene contructor]
   * @return void
   */
  constructor(owner, x, y) {
    super();
    this.owner = owner;
    this.shapes = [];
    this.init(x, y);
  }

  init(x, y) {
    let i = 0,
        shapes = Shapes.shapes,
        delta = (2 * Math.PI) / shapes.length;

    for (i = 0; i < shapes.length ; i++) {

      let posx = x + cubeSize /2 * Math.cos(i*delta);
      let posy = y + cubeSize /2 * Math.sin(i*delta);
      // let factory = new Factory();
      let shape = new Factory().createShape(shapes[i], posx, posy);
  
      this.shapes.push(shape);
      this.addChild(shape);
      // this.addChild(shape.mask);
    }
  }
}
