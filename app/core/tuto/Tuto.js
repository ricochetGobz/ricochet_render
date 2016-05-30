/**
*
* core/Tuto/tuto.js
*
**/

import DataTuto from './data';
import Text from './../Utils/Text';
import Stroke from './CubeStroke';

export default class Tuto extends PIXI.DisplayObjectContainer {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */

  constructor() {

    super();


  }

  changeText(id, delay) {

    if ( this.text ) {
      if( !this.text.hidden ) this.text.hide();
      if( DataTuto.tuto[id] ) {
        setTimeout( () => {
          this.text.update(DataTuto.tuto[id], delay);
        }, delay * 1000);
      }
    }
  }

  displayText(id) {
    if ( !this.text ) {
      this.text = new Text("PLACE UN CUBE", DataTuto.tuto[0].size, {font:"normal 10px Circular", fill:0x5C74C0});
      this.stroke = new Stroke(500, 300);
      this.addChild(this.text);
      this.addChild(this.stroke);
    }

    this.changeText(id, .7);

  }

}
