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

  this.table = new PIXI.Graphics();
  this.table.beginFill(0xffffff);
  this.table.drawCircle(this.w / 2, this.h / 2, this.h / 2);
  this.scene.addChild(this.table);

   this.factory = new EchoFactory();
   this.tuto = new Tuto();
   this.scene.addChild(this.tuto);

   this.timer = new Timer();
   this.scene.addChild(this.timer);

   this.button = new Button();
   this.scene.addChild(this.button);
   this.button.activate(this);

   this.table.interactive = true;
   this.table.on('mouseup', () => this.onButtonUp())


 }

 onButtonUp(mouseData) {
   let mousePosition = this.scene.renderer.plugins.interaction.mouse.global;
   this.createEcho(mousePosition.x, mousePosition.y);
 }

 toggleTimer() {
   this.timer.isOn = !this.timer.isOn;
   if ( this.timer.isOn ) this.timer.start();
   else this.timer.stop();
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

   this.scene.render();

 }

 /**
  * createEcho
  * - Creates ehco with shapes
  * @return void
  */
 createEcho(x, y) {
   let echoes = ["lower", "middle-low", "high", "middle-high"],

    echo = this.factory.createEcho(echoes[Math.floor(Math.random() * echoes.length)], x, y);

   this.scene.addChildAt(echo, 1);

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
