/**
*
* core/tuto/CubeStroke.js
*
**/

const size = 250 /4 ;

import Wave from '../Utils/Wave';

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
    this.sprite = sprite;
    sprite.scale.x = sprite.scale.y = 0.7;
    this.position.x = sprite.width / 4;

    this.wave = new Wave (64 / 2, 64 / 2, 50, 1);
    this.addChild(this.wave);
    this.wave.hide();

  }

  show() {
    TweenMax.to(this, 1, {delay: .5, alpha: 1});
    TweenMax.to(this.sprite, 1, {delay: .5, alpha: 1});
  }

  hide() {
    this.wave.show();
    this.wave.expand();
    TweenMax.to(this.sprite, 1, {alpha: 0});
  }

}
