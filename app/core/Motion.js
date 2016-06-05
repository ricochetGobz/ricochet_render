/**
*
* core/Motion.js
* Motion
*
**/

import Scene from './scene/Scene';
import EchoFactory from './echoes/EchoFactory';
import Tuto from './tuto/Tuto';
import Button from './timer/Button';
import Timer from './timer/Timer';

const resolution = window.innerHeight / 3;

let start = 0;
let end = Math.PI * 0.01;

export default class Motion {
  /**
  * [Experiment contructor]
  * @return void
  */
 constructor( _container ) {

   this.container = document.getElementById(_container);

   this.w = 4 * resolution;
   this.h = 3 * resolution;
  // this.w = window.innerWidth;
  // this.h = window.innerHeight;

   this.scene = new Scene( this.w, this.h );

  //  this.shape = new Shape();
  //  this.scene.addChild( this.shape );

  this.echoes = [];

  this.table = new PIXI.Graphics();
  this.table.beginFill(0xffffff);
  this.table.drawCircle(this.w / 2, this.h / 2, this.h / 2);
  this.scene.addChild(this.table);

   this.factory = new EchoFactory(this);
   this.tuto = new Tuto(this.scene.width / 2, this.scene.height / 2);
   this.scene.addChild(this.tuto);

   this.timer = new Timer(this, this.scene.width / 2, this.scene.height / 2, this.scene.height / 2 - 50);
   this.scene.addChild(this.timer);

   this.button = new Button(this.scene.width / 2, 50);
   this.scene.addChild(this.button);
   this.button.activate(this);

   this.table.interactive = true;
   this.table.on('mouseup', () => this.onButtonUp());

  //  this.test2 = new PIXI.Graphics();
  //  this.test2.beginFill(0x0000ff);
  //  this.test2.arc(this.w / 2, this.h / 2, 80, 0, 0);
  //  this.test2.endFill();
  //  this.scene.addChild(this.test2);
   //
  //  this.test3 = new PIXI.Graphics();
  //  this.test3.beginFill(0x00ffff);
  //  this.test3.drawCircle(0, 0, 8);
  //  this.test3.position.x = this.w / 2 + 80 - 4;
  //  this.test3.position.y = this.h / 2;
  //  this.test3.endFill();
  //  this.scene.addChild(this.test3);


 }

 onButtonUp(mouseData) {
   let mousePosition = this.scene.renderer.plugins.interaction.mouse.global;
   this.createEcho(mousePosition.x, mousePosition.y);
 }

 toggleTimer() {
   this.timer.isOn = !this.timer.isOn;
   if ( this.timer.isOn ) {
     this.timer.startCountdown();
     this.button.animate();
   } else {
     this.button.stop();
     this.timer.stopCountdown();
   }
 }

 displayTuto(nbr) {

   this.tuto.displayText( nbr );

 }

 /**
  * [Experiment attachToContainer]
  * - Appends the scene to Experiment's DOM container
  * @return void
  */
 attachToContainer() {

   this.container.appendChild( this.scene.renderer.view );
  //  this.scene.addChild(new Text("blablabla"));
  //  this.scene.addChild(new Stroke(100, 100));
 }

 /**
  * [Experiment update]
  * - Updates all children
  * @param  {number} DELTA_TIME
  * @return void
  */
 update( DELTA_TIME ) {

   for (var i = 0; i < this.echoes.length; i++) {
     this.echoes[i].update();
   }
   this.timer.update();
   //
  //  this.shape.update();
   //
  //   if ( this.shape.position.x <= 0 || this.shape.position.x >= this.scene.width ) {
  //     this.shape.vx *= -1;
  //   }
  //   if ( this.shape.position.y <= 0 || this.shape.position.y >= this.scene.height ) {
  //     this.shape.vy *= -1;
  //   }

 }

 /**
  * [Experiment render]
  * - Renders the scene
  * @return void
  */
 render() {

  //  end += .01;
   //
  //  this.test2.beginFill(0x0000ff);
   //
   //
  //  this.test2.arc(this.w / 2, this.h / 2, 80, start, end);
  //  this.test2.drawPolygon([
  //    new PIXI.Point(this.w / 2, this.h / 2),
  //    new PIXI.Point(this.w / 2 + 80 * Math.cos(start), this.h / 2 + 80 * Math.sin(start)),
  //    new PIXI.Point(this.w / 2 + 80 * Math.cos(end), this.h / 2 + 80 * Math.sin(end))
  //  ]);
  //  this.test2.endFill();
   //
  //  this.test3.position.x = this.w / 2 + 80 * Math.cos(start) - 4;
  //  this.test3.position.y = this.h / 2 + 80 * Math.sin(start) - 4;
   //
  //  start += .01;
   //
   //
  //  if(end > Math.PI * 2) end = 0;
  //  if(start > Math.PI * 2)  {
  //    start = 0;
  //    this.test2.clear();
  //  }


   this.scene.render();

 }

 /**
  * createEcho
  * - Creates ehco with shapes
  * @return void
  */
 createEcho(x, y) {
   let echoes = ["lower", "middle-low", "low", "high", "middle-high", "higher"],
    echo = this.factory.createEcho(echoes[Math.floor(Math.random() * echoes.length)], x, y);
    this.scene.addChildAt(echo, 1);
    echo.show();
    this.echoes.push(echo);
 }

 /**
  * [Experiment resize]
  * - Called by the parent when window's resized
  * @param  {number} _width
  * @param  {number} _height
  * @return void
  */
 resize( _width, _height ) {

   this.scene.resize( _width, _height );

 }

}
