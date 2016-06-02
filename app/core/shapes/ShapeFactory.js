/**
*
* core/shapes/ShapeFactory.js
*
**/
import Shape from '../shapes/Shape';
import Circle from '../shapes/Circle';
import Pill from '../shapes/Pill';
import Square from '../shapes/Square';
import Triangle from '../shapes/Triangle';
import RectPill from '../shapes/RectPill';

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
      case "rectpill":
        shape = new RectPill(data, x, y);
      break;
      case "square":
        shape = new Square(data, x, y);
      break;
      case "triangle":
        shape = new Triangle(data, x, y);
      break;
    }
    return shape;
  }
}
