/**
*
* core/Utils/Text.js
*
**/

const PADDING = {x: 140 /4, y: 90 /4};
const WIDTH = 110 /4;
const HEIGHT = 22 /4;
const FILL = 0xFE8DA5;
const COLOR = 0x5C74C0;
const OFFSET = 30 /4;

export default class Text extends PIXI.Graphics {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */

  constructor( x, y, size, time ) {

    super();
    this.position.x = x;
    this.position.y = y;

    this.time = time;

    this.lineStyle( 1, 0x999999, 1 );
    this.drawCircle( 0, 0, size);
  }

  show(delay) {

    if( !delay ) var delay = 0;

    TweenMax.to( this, .5, {alpha: 1} );

  }

  hide() {

    TweenMax.to( this, .5, {alpha: 0, delay: - 0.5} );
  }

  expand() {
    TweenMax.fromTo(this.scale, this.time, {x: 0, y: 0}, {x: 1, y: 1});
    TweenMax.to( this, .5, {alpha: 0, delay: 2 * this.time / 3} );
  }

}
