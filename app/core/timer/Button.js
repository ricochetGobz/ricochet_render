/**
*
* core/timer/Button.js
*
**/

export default class Button extends PIXI.DisplayObjectContainer {

  /**
   * [Experiment contructor]
   * - Extends PIXI.DisplayObjectContainer
   * @return void
   */

  constructor(x, y) {

    super();

    // this.button = new PIXI.Graphics();
    // this.button.position.x = x;
    // this.button.position.y = y;
    // this.button.beginFill(0x5C74C0);
    // this.button.drawCircle( 0, 0, 20 );
    // this.addChild( this.button );

    // this.circle = new PIXI.Sprite.fromImage('imgs/timer/icon_timer_rond.png');
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
    this.position.y = y - 55 / 2;

    this.scale.x = this.scale.y = .5;

    this.wheel.anchor.x = .5;
    this.wheel.anchor.y = .5;
    this.wheel.position.x = 55;
    this.wheel.position.y = 55;

  }

  activate(owner) {

    this.button.interactive = true;
    this.button.on('mouseup', () => this.onButtonUp(owner))

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
    if (this.animation) this.animation.stop();
  }



}
