/**
*
* core/shapes/Shape.js
*
**/
import Shape from '../shapes/Shape';

export default class Circle extends Shape {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */
  constructor(x, y, size, color) {

    super();

    this.vx = Math.random();
    this.vy = Math.random();

    this.beginFill(color);
    this.drawCircle( x, y, size );
    this.endFill();

  }

  update() {

    this.position.x += this.vx;
    this.position.y += this.vy;

  }
}
