/**
*
* core/timer/Button.js
*
**/

export default class Button extends PIXI.Container {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Container
   * @return void
   */

  constructor(x, y) {

    super();
    let sprite = new PIXI.Sprite.fromImage('imgs/carre_cube.png');
    this.addChild(sprite);
    sprite.scale.x = sprite.scale.y = 0.7;
    this.position.x = x - (93 * 0.7) / 2;
    this.position.y = y;

  }

  activate(owner) {

    this.interactive = true;
    this.on('mouseup', () => this.onButtonUp(owner))

  }

  hide() {
    TweenMax.to(this, .5, {alpha:0});
  }
  show(delay) {
    TweenMax.to(this, .5, {alpha:1, delay:delay});
  }

  onButtonUp(owner) {

    owner.toggleTimer();

  }

  animate() {
    if (!this.animation) {
      this.animation = new TimelineMax({repeat:-1});
      this.animation.fromTo(this.button, .3, {y:0}, {y:10, repeat: 1, yoyo:true} );
      this.animation.fromTo(this.wheel, 1, {rotation:0}, {rotation:Math.PI * 2} );
    }
    this.animation.play();
  }

  stop() {
    if (this.animation) {
      this.animation.stop();
      TweenMax.to(this.button, .3, {y:0});
      TweenMax.to(this.wheel, 1, {rotation:0});
    }
  }



}
