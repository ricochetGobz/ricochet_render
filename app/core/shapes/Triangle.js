/**
*
* core/shapes/Shape.js
*
**/
import Shape from '../shapes/Shape';

export default class Triangle extends Shape {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */
  constructor( data, posx, posy ) {

    super( data, posx, posy );

  }

  draw() {
    super.draw();

    this.mask.drawPolygon( [
      new PIXI.Point(this.data.offset.x + this.data.position.x - this.data.size , this.data.offset.y + this.data.position.y + this.data.size ),
      new PIXI.Point(this.data.offset.x + this.data.position.x, this.data.offset.y + this.data.position.y - this.data.size / 2 ),
      new PIXI.Point(this.data.offset.x + this.data.position.x + this.data.size , this.data.offset.y + this.data.position.y + this.data.size ),
    ]);
    this.mask.endFill();
    this.addChild(this.mask);

    this.sprite.mask = this.mask;
  }

  update() {

    super.update();

  }
}
