/**
*
* core/shapes/Shape.js
*
**/

export default class Shape extends PIXI.Graphics {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */
  constructor() {

    super();

    this.vx = Math.random();
    this.vy = Math.random();

    this.beginFill( 0xff0000 );
    this.drawCircle( 0, 0, 20 );
    this.endFill();

  }

  update() {

    this.position.x += this.vx;
    this.position.y += this.vy;

  }

}
