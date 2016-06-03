/**
*
* core/echos/EchoFactory.js
*
**/
import Echo from '../echoes/Echo';
import Lower from '../echoes/lower-data';
import High from '../echoes/high-data';
import MiddleHigh from '../echoes/middleHigh-data';
import MiddleLow from '../echoes/middleLow-data';

export default class EchoFactory {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */
  constructor(owner) {
    this.owner = owner;
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
      case "middle-low":
        echo = new Echo(this, x, y, MiddleLow);
      break;
    }
    return echo;
  }
}
