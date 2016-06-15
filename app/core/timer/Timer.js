/**
*
* core/timer/Timer.js
*
**/

import Composition from "./Composition";
import Clock from "./Clock";
import Check from "./Check";
import utils from './../utils';
import adrs from './../addresses';

export default class Timer extends PIXI.Container {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Container
   * @return void
   */

  constructor(owner, x, y, size) {

    super();

    this.owner = owner;

    this.position.x = x;
    this.position.y = y;

    this.timer = new PIXI.Graphics();
    this.timer.lineStyle(4, 0xeeeeee);
    this.timer.arc(0, 0, size, Math.PI / 20, (Math.PI * 2) - (Math.PI / 20));
    this.timer.rotation =  -  Math.PI / 2;
    this.addChild( this.timer );

    this.timerFull = new PIXI.Graphics();
    this.timerFull.lineStyle(4, 0x447fd4);
    this.timerFull.drawCircle(0, 0, size);
    this.addChild( this.timerFull );

    this.clock = new Clock(0,  - this.owner.h / 2);
    this.addChild(this.clock);

    this.check = new Check(0,  - this.owner.h / 2);
    this.addChild(this.check);

    let options = { font:"normal 15px Circular", fill:0x447fd4, align:"center"  };
    this.timeLeft = {min: 0 , sec:25};
    this.text = new PIXI.Text(this.timeLeft.min + " : " + this.timeLeft.sec, options);
    this.text.position.x = - this.text.width / 2;
    this.text.position.y = (- this.owner.h / 2) + size / 4;
    this.addChild(this.text);

    this.addAnim(0, 0, size);

    this.isOn = false;
    this.compositions = [];

    this.hide();

  }

  show() {
    this.test2.clear();
    this.start = Math.PI / 20;
    this.end = (Math.PI / 20) + ((Math.PI * 2) * 0.01);
    TweenMax.to(this.timer, .5, {alpha: 1});
    TweenMax.to(this.timerFull, .5, {alpha: 1});
    TweenMax.to(this.maske, .5, {alpha: 1});
    TweenMax.to(this.text, .5, {alpha: 1});
    this.clock.show();
  }

  hide() {
    this.clock.hide();
    TweenMax.to(this.timer, .5, {alpha: 0});
    TweenMax.to(this.timerFull, .5, {alpha: 0});
    TweenMax.to(this.maske, .5, {alpha: 0});
    TweenMax.to(this.text, .5, {alpha: 0});
  }

  startCountdown() {
    this.show();
    this.clock.animate();
    console.log("timer start");
    this.compo = new Composition();
    this.compositions.push(this.compo);
    let string = "0 : ";
    TweenMax.fromTo(this.timeLeft, 30, {sec:30}, {ease:Linear.easeNone, sec:0, onUpdate:() => {
      if (this.timeLeft.sec < 10) string = "0 : 0";
      else string = "0 : ";
      this.text.text = this.timeLeft.min + string + this.timeLeft.sec.toFixed(0);
    }});
  }

  addAnim(x, y, size) {

    this.start = 0;
    this.end = (Math.PI * 2) * 0.01;

    this.maske = new PIXI.Graphics();

    this.size = size;

    // if(this.data.stroke) {
      this.test2 = new PIXI.Graphics();
      this.test2.beginFill(0x0000ff);
      this.test2.arc(0, 0, size + 4, 0, Math.PI * 0.00000001);
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
    this.clock.stop();
    this.check.show();
    let compo = this.compositions[ this.compositions.length - 1 ];
    compo.title = "Compo";
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
    if(this.end < (Math.PI * 2) - (Math.PI / 20) && this.isOn) {
      this.end += .004;

      this.test2.beginFill(0x0000ff);

      this.test2.arc(0, 0, (this.size + 4), this.start, this.end);
      this.test2.drawPolygon([
        new PIXI.Point(0, 0),
        new PIXI.Point(0 + (this.size + 4) * Math.cos(this.start), 0 + (this.size + 4) * Math.sin(this.start)),
        new PIXI.Point(0 + (this.size + 4) * Math.cos(this.end), 0 + (this.size + 4) * Math.sin(this.end))
      ]);
      this.test2.endFill();

      this.test3.position.x = (this.size) * Math.cos(this.end - Math.PI / 2);
      this.test3.position.y = (this.size) * Math.sin(this.end - Math.PI / 2);

      this.start += .004;

      // if(this.end > Math.PI * 2) this.end = 0;
    } else if (this.end >= (Math.PI * 2) - (Math.PI / 20)) {
      this.start = 0;
      this.end = (Math.PI * 2) * 0.01;
      this.owner.toggleTimer();
    }
  }

  parseTime(ms) {
    console.log(ms)
    let min = (ms/1000/60) << 0,
    sec = ((ms/1000) % 60).toFixed(0);

    return {min:min, sec:sec};
  }

}
