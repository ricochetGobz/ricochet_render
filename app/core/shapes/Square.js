/**
*
* core/shapes/Shape.js
*
**/
import Shape from '../shapes/Shape';

export default class Square extends Shape {

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

    this.sprite.mask.drawRect( 0, 0, this.data.size * 2, this.data.size * 2);
    this.sprite.mask.endFill();
    this.addChild(this.sprite.mask);

    this.sprite.mask = this.sprite.mask;

    if(this.data.anim) this.addAnim();
  }

  show() {
    TweenMax.fromTo(this, 1.2, {alpha:0}, {alpha:1, onStart:() => {
      this.animate();
    }});

    TweenMax.fromTo(this.sprite.mask, 1.2, {alpha:0}, {alpha:1});

    // TweenMax.fromTo(this.scale, .7, {x:0, y:0}, {x:1, y:1});
    // TweenMax.fromTo(this.sprite.mask.scale, .7, {x:0, y:0}, {x:1, y:1});
  }

  animate() {
    if (!this.tweenAnimate) {
      this.tweenAnimate = TweenMax.fromTo(this.scale, .05, {x:1, y:1}, {x:.99, y:.98, yoyo:true, repeat:50, onComplete:() => {
        this.hide();
      }});
    }
    this.tweenAnimate.play();


  }

  hide() {
    TweenMax.fromTo(this, 1, {alpha:1}, {alpha:0});
    TweenMax.fromTo(this.sprite.mask, 1, {alpha:1}, {alpha:0});

    // TweenMax.fromTo(this.scale, 2, {x:1, y:1}, {x:0, y:0});
    // TweenMax.fromTo(this.sprite.mask.scale, 2, {x:1, y:1}, {x:0, y:0});
  }

  update() {

    super.update();

  }
}
