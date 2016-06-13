/**
*
* core/timer/Composition.js
*
**/

export default class Intro extends PIXI.Container {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Container
   * @return void
   */

  constructor(x, y) {
    super();

    // let texture = PIXI.Texture.fromVideo(`imgs/logo_ricochet.mp4`);
    // this.video = new PIXI.Sprite(texture);
    // this.video.scale.x = this.video.scale.y = .25;
    // this.position.x = x - 355/2;
    // this.position.y = y - 100;
    // this.addChild(this.video);
    //
    // let videoSource = texture.baseTexture.source;
    // videoSource.pause();
  }

  hide() {
    for (var j = 0; j < this.children.length; j++) {
      // this.children[j].hide();
    }
  }

  show() {
    for (var j = 0; j < this.children.length; j++) {
      // this.children[j].show();
    }
  }


}
