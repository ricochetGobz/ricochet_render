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
    if (this.data.colors[1]) gradient.addColorStop( 1, this.data.colors[1]);
    else gradient.addColorStop( 1, this.data.colors[0] );

    ctx.fillStyle = gradient;
    ctx.fillRect( 0, 0, this.data.size * 2 + 8, this.data.size * 2 + 8);

    var texture = PIXI.Texture.fromCanvas( canvas );
    this.sprite = new PIXI.Sprite(texture);
    this.addChild(this.sprite);
    this.sprite.position.x =  this.data.offset.x + this.data.position.x - this.data.size - 4;
    this.sprite.position.y =  this.data.offset.y + this.data.position.y - this.data.size - 4;

    this.mask = new PIXI.Graphics();

    if (this.data.stroke) {
      this.mask.lineStyle( 8, this.data.colors[0], 1 );
    } else {
      this.mask.beginFill( this.data.colors[0] );
    }
  }

  update() {

    this.position.x += this.vx;
    this.position.y += this.vy;

  }

}
