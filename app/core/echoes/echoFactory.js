/**
*
* core/echos/EchoFactory.js
*
**/
import Echo from '../echoes/Echo';

import Lower from '../echoes/sprites/lower-data';
import MiddleLow from '../echoes/sprites/middleLow-data';
import Low from '../echoes/sprites/low-data';
import High from '../echoes/sprites/high-data';
import MiddleHigh from '../echoes/sprites/middleHigh-data';
import Higher from '../echoes/sprites/higher-data';


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
      case "middle-low":
        echo = new Echo(this, x, y, MiddleLow);
      break;
      case "low":
        echo = new Echo(this, x, y, Low);
      break;
      case "high":
        echo = new Echo(this, x, y, High);
      break;
      case "middle-high":
        echo = new Echo(this, x, y, MiddleHigh);
      break;
      case "higher":
        echo = new Echo(this, x, y, Higher);
      break;
    }
    return echo;
  }
}
