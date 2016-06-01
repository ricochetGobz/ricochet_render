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

  constructor() {

    super();

    this.timer = new PIXI.Graphics();
    this.addChild( this.timer );

    this.isOn = false;
    this.compositions = [];

  }

  start() {

    console.log("timer start");
    this.compo = new Composition();
    this.compositions.push(this.compo);

  }

  onAdd( data ) {
    console.log("add note");
    console.log(this.compo);
    if(this.isOn) this.compositions[ this.compositions.length - 1 ].addNote( data );
  }

  stop() {
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

  parseTime(ms) {
    let min = (ms/1000/60) << 0,
    sec = ((ms/1000) % 60).toFixed(0);

    return {min:min, sec:sec};
  }

}
