/**
*
* core/Tuto/tuto.js
*
**/

import DataTuto from './data';
import Text from './../Utils/Text';
import Stroke from './CubeStroke';

export default class Tuto extends PIXI.Container {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Container
   * @return void
   */

  constructor(x, y) {

    super();
    this.x = x;
    this.y = y;

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

  gotoTop() {
    TweenMax.to(this.text, 1, {
      y:this.text.height
    });
  }

  hide() {
    for (var j = 0; j < this.children.length; j++) {
      this.children[j].hide();
    }
  }

  show() {
    for (var j = 0; j < this.children.length; j++) {
      this.children[j].show();
    }
  }

  displayText(id) {
    if ( !this.text ) {
      this.text = new Text(0, 0, "PLACE UN CUBE", DataTuto.tuto[0].size, {font:"normal 10px Circular", fill:0x5C74C0});
      this.stroke = new Stroke(0, 50);
      this.addChild(this.text);
      this.addChild(this.stroke);
    }

    this.changeText(id, .7);

  }

}
