/**
*
* core/Utils/Text.js
*
**/

export default class Text extends PIXI.Text {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */
  constructor( text, options ) {
    if (!options) {
      let options = { font:"bite", fill:"0x000000", align:"center"  };
    }
    super( text, options );
    // this.font = "56px";
    this.position.x = this.position.y = 50;
    this.alpha = 0;
    this.show();

  }

  show() {

    TweenMax.fromTo(this, 1, {y:200, x:340}, {alpha: 1, ease:Linear.EaseNone, y:210, x:350});

  }

  hide() {

    TweenMax.to(this, .5, {alpha: 0, ease:Linear.EaseNone});

  }

}
