/**
*
* core/tuto/CubeStroke.js
*
**/

const size = 200;

export default class CubeStroke extends PIXI.Graphics {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */

  constructor( x, y ) {

    super();

    this.draw( x, y );
    this.alpha = 0;
    this.show();

  }

  draw( x, y ) {

    this.lineStyle(5, 0xFF0000);
    this.drawRect( x, y, size, size );

  }

  show() {
    TweenMax.to(this, 1, {alpha: 1});
  }

  hide() {
    TweenMax.to(this, 1, {alpha: 0});
  }

}
