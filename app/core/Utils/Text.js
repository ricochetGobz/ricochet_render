/**
*
* core/Utils/Text.js
*
**/

const PADDING = {x: 140 /4, y: 90 /4};
const WIDTH = 110 /4;
const HEIGHT = 22 /4;
const FILL = 0xFE8DA5;
const COLOR = 0x5C74C0;
const OFFSET = 30 /4;

export default class Text extends PIXI.Graphics {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */

  constructor( x, y, text, size, options ) {
    if (!options) {
      let options = { font:"normal 40px Circular", fill:COLOR, align:"center"  };
    }
    super();

    this.text = new PIXI.Text(text, options);
    this.addChild(this.text);

    this.stroke = new PIXI.Graphics();
    this.stroke.lineStyle( 1, COLOR, 1 );
    this.stroke.position.x = -PADDING.x;
    this.stroke.position.y = -PADDING.y;
    this.stroke.drawRect( 0, 0, this.text.width + 2 * PADDING.x, this.text.height+ 2 * PADDING.y);
    this.addChild(this.stroke);

    this.rect = new PIXI.Graphics();
    this.rect.beginFill( FILL );
    this.rect.drawRect( 0, 0, WIDTH, HEIGHT );
    this.rect.position.x = -PADDING.x - OFFSET;
    this.rect.position.y = -PADDING.y - 5;
    this.addChild(this.rect);

    this.position.x = x - this.text.width / 2 - PADDING.x / 2;
    this.position.y = y - this.text.height / 2 - PADDING.y / 2;

    this.initSetup();
    this.hidden = true;

  }

  initSetup(  ) {

    TweenMax.set( this.rect.scale, { x: 0, y: 1 } );
    TweenMax.set( this.stroke, { alpha: 0 } );
    TweenMax.set( this.text, { alpha: 0 } );
    TweenMax.set( this.text.position, { y: 10 } );

  }

  update(data) {
    if (!data.wording) return;
    // this.text.text = data.wording;

    var spaces1 = "$1 "; // put any number of spaces after the $1

    this.text.text = data.wording.replace(/(.)(?=.)/g, spaces1);

    this.removeChild(this.stroke);
    this.stroke = new PIXI.Graphics();
    this.stroke.lineStyle( 1, COLOR, 1 );
    this.stroke.position.x = -PADDING.x;
    this.stroke.position.y = -PADDING.y;
    this.stroke.drawRect( 0, 0, this.text.width + 2 * PADDING.x, this.text.height+ 2 * PADDING.y);
    this.addChild(this.stroke);

    this.removeChild(this.rect);
    this.rect = new PIXI.Graphics();
    this.rect.beginFill( FILL );
    this.rect.drawRect( 0, 0, WIDTH, HEIGHT );
    this.rect.position.x = -PADDING.x - OFFSET;
    this.rect.position.y = -PADDING.y - 2 * HEIGHT / 3;
    this.addChild(this.rect);

    this.initSetup();
    this.show();

  }

  show(delay) {

    if( !delay ) var delay = 0;

    TweenMax.to( this.rect.scale, .5, { delay: .7 + delay, x: 1, y: 1, ease: Power2.easeOut } );
    TweenMax.to( this.stroke, 1.5, { delay: .5 + delay, alpha: 1, ease: Power2.easeOut } );
    TweenMax.to( this.text, .7, { delay: .7 + delay, alpha: 1, ease: Power2.easeOut } );
    TweenMax.to( this.text.position, .7, { delay: .5 + delay, y: 0, ease: Power2.easeOut } );

    this.hidden = false;

  }

  hide() {

    TweenMax.to( this.rect.scale, .7, { x: 0, y: 1, ease: Power2.easeOut } );
    TweenMax.to( this.stroke, .5, { delay: .2, alpha: 0, ease: Power2.easeOut } );
    TweenMax.to( this.text, .5, { delay: .2, alpha: 0, ease: Power2.easeOut } );
    TweenMax.to( this.text.position, .5, {delay: .2,  y: 10, ease: Power2.easeOut } );

    this.hidden = true;
  }

}
