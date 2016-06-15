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
    this.circle.lineStyle(4, 0xBC76B2);
    this.circle.beginFill(0xffffff);
    this.circle.drawCircle(-20, -20, 40);
    this.addChild(this.circle);
    this.addChild(this.wheel);

    this.position.x = x ;
    this.position.y = y ;

    this.scale.x = this.scale.y = .5;

    this.wheel.anchor.x = .5;
    this.wheel.anchor.y = .5;
    this.wheel.position.x = 5 + 5 / 2;
    this.wheel.position.y = 55 + 55 / 2;
    this.button.position.x = - 55 / 2 - 20;
    this.button.position.y = 55 / 2;
    this.circle.position.x = 55 / 2;
    this.circle.position.y = 110;

  }

  hide() {
    TweenMax.to(this, .5, {alpha:0});
  }
  show() {
    TweenMax.to(this, .2, {alpha:1});
    TweenMax.fromTo(this.circle.scale, .3, {x: .8, y:.8}, {delay: .1, x: 1, y:1});
    TweenMax.fromTo(this.button, .5, {y: (55 / 2) + 20}, {delay: .1, y: 55 / 2, ease:Back.easeOut.config(2.4)});
    TweenMax.fromTo(this.wheel, .5, {y: (55 + 55 / 2) + 20}, {delay: .1, y:55 + 55 / 2, ease:Back.easeOut.config(2.4), onComplete:() => {
      this.animate();
    }});
    tl.play();
  }

  animate() {
    if (!this.animation) {
      this.animation = new TimelineMax({repeat:-1});
      this.animation.fromTo(this.button, .3, {y:55 / 2}, {y:(55 / 2) + 10, repeat: 1, yoyo:true} );
      this.animation.fromTo(this.wheel, 1, {rotation:0}, {rotation:Math.PI * 2} );
    }
    this.animation.play();
  }

  stop() {
    if (this.animation) {
      this.animation.stop();
      TweenMax.to(this.button, .3, {y: 55 / 2});
      TweenMax.to(this.wheel, 1, {rotation:0});
    }
  }
}
