/**
*
* core/shapes/Shape.js
*
**/
import Shape from '../shapes/Shape';

export default class Pill extends Shape {

  /**
   * [Experiment contructor]
   * - Extends PIXI.Graphics
   * @return void
   */
   constructor( data, posx, posy ) {

     super( data, posx, posy );

   }

   draw() {
     super.draw();

     this.mask.drawRoundedRect( this.data.offset.x + this.data.position.x, this.data.offset.y + this.data.position.y, this.data.size, this.data.size/4.5, this.data.size/9 );
     this.mask.endFill();
     this.addChild(this.mask);

     this.sprite.mask = this.mask;
     console.log(this.anchor);
   }

  update() {
    super.update();
  }
}
