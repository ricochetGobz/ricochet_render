/**
*
* core/shapes/Shape.js
*
**/

export default class Shape extends PIXI.Graphics {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */
  constructor( data, posx, posy ) {

    super();

    this.owner;

    this.vx = Math.random();
    this.vy = Math.random();

    this.data = data;
    this.data.position.x = posx;
    this.data.position.y = posy;

    this.draw();
  }

  draw() {
    var canvas = document.createElement( 'canvas' );
    canvas.width = 256;
    canvas.height = 256;
    var ctx = canvas.getContext( '2d' );
    var gradient = ctx.createLinearGradient( 0, 0, 170, 0 );
    gradient.addColorStop( 0, this.data.colors[0] );
    if ( this.data.colors[1] ) gradient.addColorStop( 1, this.data.colors[1] );
    else gradient.addColorStop( 1, this.data.colors[0] );

    ctx.fillStyle = gradient;
    ctx.fillRect( 0, 0, this.data.size * 2 + 8, this.data.size * 2 + 8);

    var texture = PIXI.Texture.fromCanvas( canvas );
    this.sprite = new PIXI.Sprite(texture);
    this.addChild(this.sprite);
    this.position.x =  this.data.offset.x + this.data.position.x;
    this.position.y =  this.data.offset.y + this.data.position.y;

    this.sprite.position.x =  - this.data.size - 4;
    this.sprite.position.y =  - this.data.size - 4;

    this.sprite.mask = new PIXI.Graphics();

    if (this.data.stroke) {
      this.sprite.mask.lineStyle( 8, this.data.colors[0], 1 );
    } else {
      this.sprite.mask.beginFill( this.data.colors[0] );
    }
  }

  update() {
    if(this.end < Math.PI * 2 && this.data.anim) {
      this.end += .04;

      this.test2.beginFill(0x0000ff);

      this.test2.arc(0, 0, (this.data.size + 8), this.start, this.end);
      this.test2.drawPolygon([
        new PIXI.Point(0, 0),
        new PIXI.Point((this.data.size + 8) * Math.cos(this.start), (this.data.size + 8) * Math.sin(this.start)),
        new PIXI.Point((this.data.size + 8) * Math.cos(this.end), (this.data.size + 8) * Math.sin(this.end))
      ]);
      this.test2.endFill();

      this.test3.position.x = (this.data.size) * Math.cos(this.start);
      this.test3.position.y = (this.data.size) * Math.sin(this.start);

      this.start += .04;

      if(this.end > Math.PI * 2) this.end = 0;
    }
  }

  addAnim() {

    this.start = 0;
    this.end = (Math.PI * 2) * 0.01;

    this.maske = new PIXI.Graphics();

    // if(this.data.stroke) {
      this.test2 = new PIXI.Graphics();
      this.test2.beginFill(0x0000ff);
      this.test2.arc(0, 0, this.data.size, 0, Math.PI * 2 * 0.1);
      this.test2.endFill();
      this.maske.addChild(this.test2);

      this.test3 = new PIXI.Graphics();
      this.test3.beginFill(0x00ffff);
      this.test3.drawCircle(0, 0, 8);
      this.test3.position.x = 0 + this.data.size - 4;
      this.test3.position.y = 0;
      this.test3.endFill();
      // this.maske.addChild(this.test3);

      this.addChild(this.maske);

      this.mask = this.test2;
    // }
  }

  hide() {
    this.owner.hide();
  }

}
