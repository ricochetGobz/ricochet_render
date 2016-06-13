/**
*
* core/tuto/CubeStroke.js
*
**/

const size = 250 /4 ;

export default class CubeStroke extends PIXI.Graphics {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */

  constructor( x, y ) {

    super();

    this.draw( 0, 0 );
    this.position.x = x - size / 2;
    this.position.y = y;
    this.alpha = 0;
    this.show();

  }

  draw( x, y ) {
    let sprite = new PIXI.Sprite.fromImage('imgs/carre_cube.png');
    this.addChild(sprite);
    sprite.scale.x = sprite.scale.y = 0.5;
    this.position.x = sprite.width / 4;

  }

  show() {
    TweenMax.to(this, 1, {delay: .5, alpha: 1});
  }

  hide() {
    TweenMax.to(this, 1, {delay: .2, alpha: 0});
  }

}
