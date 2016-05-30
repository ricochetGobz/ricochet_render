/**
*
* core/timer/Timer.js
*
**/

import Composition from "./Composition";

export default class Timer extends PIXI.DisplayObjectContainer {

  /**
   * [Experiment contructor]
   * - Extends PIXI.DisplayObjectContainer
   * @return void
   */

  constructor() {

    super();

    this.timer = new PIXI.Graphics();
    // this.timer.position.x = window.innerWidth / 2 - 10;
    // this.timer.position.y = 20;
    // this.timer.beginFill(0x5C74C0);
    // this.timer.drawCircle( 0, 0, 20 );
    this.addChild( this.timer );

    this.isOn = false;
    this.compositions = [];

  }

  start() {

    this.compositions.push(new Composition());

  }

  onAdd( data ) {
    if(this.isOn) this.compositions[ this.compositions.length - 1 ].addNote( data );
  }

  stop() {
    this.compositions[ this.compositions.length - 1 ].name = "Le rire c'est le lol";
    this.compositions[ this.compositions.length - 1 ].author = "Jack";
    this.compositions[ this.compositions.length - 1 ].date = Date.now();
    console.log(this);
    console.log(this.compositions);
    console.log(this.compositions[ this.compositions.length - 1 ]);

    let compo = JSON.stringify(this.compositions[ this.compositions.length - 1 ]);
    console.log(compo);
    // fs.write("compositions.json", compo, 0, 1000, 0);
  }

}
