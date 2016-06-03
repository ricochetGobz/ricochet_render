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

  constructor(x, y) {

    super();

    this.button = new PIXI.Graphics();
    this.button.position.x = x;
    this.button.position.y = y;
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
