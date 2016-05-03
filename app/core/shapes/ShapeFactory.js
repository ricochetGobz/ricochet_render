/**
*
* core/shapes/ShapeFactory.js
*
**/
import Shape from '../shapes/Shape';
import Circle from '../shapes/Circle';
import Pill from '../shapes/Pill';

export default class ShapeFactory {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */
  constructor() {

  }

  createShape(data, x, y) {
    let shape;
    switch (data.name) {
      case "circle":
        shape = new Circle(data, x, y);
      break;
      case "pill":
        shape = new Pill(data, x, y);
      break;
    }
    return shape;
  }
}
