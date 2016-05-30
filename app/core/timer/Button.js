/**
*
* core/timer/Button.js
*
**/

export default class Button extends PIXI.DisplayObjectContainer {

  /**
   * [Experiment contructor]
   * - Extends PIXI.DisplayObjectContainer
   * @return void
   */

  constructor() {

    super();

    this.button = new PIXI.Graphics();
    this.button.position.x = window.innerWidth / 2 - 10;
    this.button.position.y = 20;
    this.button.beginFill(0x5C74C0);
    this.button.drawCircle( 0, 0, 20 );
    this.addChild( this.button );

  }

  activate(owner) {

    this.button.interactive = true;
    this.button.on('mouseup', () => this.onButtonUp(owner))

  }

  onButtonUp(owner) {

    owner.toggleTimer();

  }



}
