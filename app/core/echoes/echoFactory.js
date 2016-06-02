/**
*
* core/echos/EchoFactory.js
*
**/
import Echo from '../echoes/Echo';
import Lower from '../echoes/lower-data';
import High from '../echoes/high-data';
import MiddleHigh from '../echoes/middleHigh-data';

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
      case "high":
        echo = new Echo(this, x, y, High);
      break;
      case "middle-high":
        echo = new Echo(this, x, y, MiddleHigh);
      break;
    }
    return echo;
  }
}
