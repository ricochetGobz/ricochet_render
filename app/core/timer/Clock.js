/**
*
* core/timer/Clock.js
*
**/

export default class Clock extends PIXI.Container {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Container
   * @return void
   */

  constructor(x, y) {

    super();

    this.wheel = new PIXI.Sprite.fromImage('imgs/timer/icon_timer_aiguille.png');
    this.circle = new PIXI.Graphics();
    this.button = new PIXI.Sprite.fromImage('imgs/timer/icon_timer_bouton.png');
    this.addChild(this.button);
    this.circle.lineStyle(4, 0xbc76b2);
    this.circle.beginFill(0xffffff);
    this.circle.drawCircle(55, 65, 40);
    this.addChild(this.circle);
    this.addChild(this.wheel);

    this.position.x = x - 55 / 2;
    this.position.y = y + 55 / 2;

    this.scale.x = this.scale.y = .5;

    this.wheel.anchor.x = .5;
    this.wheel.anchor.y = .5;
    this.wheel.position.x = 55;
    this.wheel.position.y = 55;

  }

  hide() {
    TweenMax.to(this, .5, {alpha:0});
  }
  show() {
    TweenMax.to(this, .5, {alpha:1});
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
