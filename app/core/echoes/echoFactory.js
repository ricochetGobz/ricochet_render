/**
*
* core/echos/EchoFactory.js
*
**/
import Echo from '../echoes/Echo';
import Lower from '../echoes/lower-data'

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
        echo = new Echo(this, x, y, Lower);
      break;
      case "middleLow":
        // echo = new MiddleLow(x, y);
      break;
    }
    return echo;
  }
}
