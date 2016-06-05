/**
*
* core/timer/Timer.js
*
**/

import Composition from "./Composition";
import utils from './../utils';
import adrs from './../addresses';

export default class Timer extends PIXI.DisplayObjectContainer {

  /**
   * [Experiment contructor]
   * - Extends PIXI.DisplayObjectContainer
   * @return void
   */

  constructor(owner, x, y, size) {

    super();

    this.owner = owner;

    this.timer = new PIXI.Graphics();
    this.timer.lineStyle(8, 0xeeeeee);
    this.timer.drawCircle(x, y, size);
    this.addChild( this.timer );

    this.timerFull = new PIXI.Graphics();
    this.timerFull.lineStyle(8, 0x447fd4);
    this.timerFull.drawCircle(x, y, size);
    this.addChild( this.timerFull );

    this.addAnim(x, y, size);

    this.isOn = false;
    this.compositions = [];

    this.hide();

  }

  show() {
    this.test2.clear();
    this.start = 0;
    this.end = (Math.PI * 2) * 0.01;
    TweenMax.to(this.timer, .5, {alpha: 1});
    TweenMax.to(this.timerFull, .5, {alpha: 1});
    TweenMax.to(this.maske, .5, {alpha: 1});
  }

  hide() {
    TweenMax.to(this.timer, .5, {alpha: 0});
    TweenMax.to(this.timerFull, .5, {alpha: 0});
    TweenMax.to(this.maske, .5, {alpha: 0});
  }

  startCountdown() {
    this.show();
    console.log("timer start");
    this.compo = new Composition();
    this.compositions.push(this.compo);

  }

  addAnim(x, y, size) {

    this.start = 0;
    this.end = (Math.PI * 2) * 0.01;

    this.maske = new PIXI.Graphics();

    this.size = size;

    // if(this.data.stroke) {
      this.test2 = new PIXI.Graphics();
      this.test2.beginFill(0x0000ff);
      this.test2.arc(0, 0, size + 8, 0, Math.PI * 0.00000001);
      this.test2.endFill();
      this.maske.position.x = x;
      this.maske.position.y = y;
      this.test2.rotation =  -  Math.PI / 2;
      this.maske.addChild(this.test2);

      this.test3 = new PIXI.Graphics();
      this.test3.beginFill(0xffffff);
      this.test3.lineStyle(4, 0x447fd4);
      this.test3.drawCircle(0, 0, 8);
      this.test3.position.x = (this.size) * Math.cos(this.end - Math.PI / 2);
      this.test3.position.y = (this.size) * Math.sin(this.end - Math.PI / 2);
      this.test3.endFill();
      this.maske.addChild(this.test3);

      this.addChild(this.maske);

      this.timerFull.mask = this.test2;
    // }
  }

  onAdd( data ) {
    console.log("add note");
    console.log(this.compo);
    if(this.isOn) this.compositions[ this.compositions.length - 1 ].addNote( data );
  }

  stopCountdown() {
    this.hide();
    let compo = this.compositions[ this.compositions.length - 1 ];
    compo.title = "Le rire c'est le lol";
    compo.author = "Jack";
    compo.duration = this.parseTime(Date.now() - compo.time);
    compo.createdAt = Date.now();
    compo.id = this.compositions.length - 1;
    // if (compo.timeline.length < 1) this.compositions.slice(this.compositions.length - 1, 1);
    console.log(this);
    console.log(this.compositions);
    console.log(compo);
    console.log(compo.duration.min + ":" + compo.duration.sec);

    utils.emitter.emit(adrs.SEND_NEW_COMPOSITION, JSON.stringify(compo));
  }

  update() {
    if(this.end < Math.PI * 2 && this.isOn) {
      this.end += .01;

      this.test2.beginFill(0x0000ff);

      this.test2.arc(0, 0, (this.size + 8), this.start, this.end);
      this.test2.drawPolygon([
        new PIXI.Point(0, 0),
        new PIXI.Point(0 + (this.size + 8) * Math.cos(this.start), 0 + (this.size + 8) * Math.sin(this.start)),
        new PIXI.Point(0 + (this.size + 8) * Math.cos(this.end), 0 + (this.size + 8) * Math.sin(this.end))
      ]);
      this.test2.endFill();

      this.test3.position.x = (this.size) * Math.cos(this.end - Math.PI / 2);
      this.test3.position.y = (this.size) * Math.sin(this.end - Math.PI / 2);

      this.start += .01;

      // if(this.end > Math.PI * 2) this.end = 0;
    } else if (this.end >= Math.PI * 2) {
      this.start = 0;
      this.end = (Math.PI * 2) * 0.01;
      this.owner.toggleTimer();
    }
  }

  parseTime(ms) {
    let min = (ms/1000/60) << 0,
    sec = ((ms/1000) % 60).toFixed(0);

    return {min:min, sec:sec};
  }

}
