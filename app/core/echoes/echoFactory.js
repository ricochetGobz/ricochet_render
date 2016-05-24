/**
*
* core/echos/EchoFactory.js
*
**/
import Echo from '../echoes/Echo';
import Lower from '../echoes/Lower';

export default class EchoFactory {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */
  constructor() {

  }

  createEcho(name, x, y) {
    let echo;
    switch (name) {
      case "lower":
        echo = new Lower(this, x, y);
      break;
      case "middleLow":
        // echo = new MiddleLow(x, y);
      break;
    }
    return echo;
  }
}