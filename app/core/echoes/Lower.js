/**
*
* core/echoes/Lower.js
*
**/

import Circle from '../shapes/Circle';
import Shapes from '../echoes/shapes';

const colors = [0xa8539b, 0x2ac0d1];
const gradients = [{start:0xdcd3f0, end:0x79d8ed},
                  {start:0x9272a5, end:0x3951b0},
                  {start:0x5daae1, end:0x76c1c6}];

export default class Lower extends PIXI.Container{


  /**
   * [Scene contructor]
   * @return void
   */
  constructor(x, y) {
    super();
    this.shapes = [];
    this.init(x, y);
  }

  init(x, y) {
    let i = 0,
        shapes = Shapes.lower.shapes,
        delta = (2 * Math.PI) / Shapes.lower.number;
    console.log(delta);
    
    for (i = 0; i < shapes.length ; i++) {

      switch(shapes[i].name) {
        case "circle":
          for (var j = 0; j < shapes[i].number; j++) {
            let shape = new Circle(x + 25, y + 25, 50, colors[i % colors.length]);
            this.shapes.push(shape);
            this.addChild(shape);
          }
        break;
        case "pill":
          for (var j = 0; j < shapes[i].number; j++) {
            let shape = new Circle(x + 25, y + 25, 50, colors[i % colors.length]);
            this.shapes.push(shape);
            this.addChild(shape);
          }
        break;
      }

    }
  }
}
