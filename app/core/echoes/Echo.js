/**
*
* core/echoes/Echo.js
*
**/

import Factory from '../shapes/ShapeFactory';


const colors = [0xa8539b, 0x2ac0d1];
const gradients = [{start:0xdcd3f0, end:0x79d8ed},
                  {start:0x9272a5, end:0x3951b0},
                  {start:0x5daae1, end:0x76c1c6}];

const cubeSize = 200;

export default class Echo extends PIXI.Container{

  /**
   * [Scene contructor]
   * @return void
   */
  constructor( owner, x, y, data ) {
    super();
    this.owner = owner;
    this.shapes = [];
    this.sprites = [];
    this.init(x, y, data);
  }

  init( x, y, data ) {
    console.log(x, y)
    let i = 0,
        shapes = data.shapes,
        delta = (2 * Math.PI) / shapes.length;

    for (i = 0; i < shapes.length ; i++) {

      let posx = x + cubeSize /2 * Math.cos(i*delta);
      let posy = y + cubeSize /2 * Math.sin(i*delta);
      // let factory = new Factory();
      let shape;
      if(shapes[i].sprite) {
        shape = this.owner.spriteFactory.createAnim(shapes[i], posx, posy);
        this.sprites.push(shape);
      } else {
        shape = new Factory().createShape(this, shapes[i], posx, posy);
        this.shapes.push(shape);
      }

      this.addChild(shape);
      // this.addChild(shape.mask);
    }
  }

  update() {
    let length = this.shapes.length;
    for (var i = 0; i < length; i++) {
      this.shapes[i].update();
    }
  }

  show() {
    let length = this.shapes.length;
    for (var i = 0; i < length; i++) {
      this.shapes[i].show();
    }
    let value = {number:1};
    TweenMax.to(value, 6, {number:5, onComplete:() => {
      this.hide();
    }})
  }

  hide() {
    let length = this.shapes.length;
    let length2 = this.sprites.length;
    for (var i = 0; i < length; i++) {
      this.removeChild(this.shapes[i]);
    }
    for (var i = 0; i < length2; i++) {
      this.removeChild(this.sprites[i]);
    }
    this.owner.owner.scene.removeChild(this);
  }
}
