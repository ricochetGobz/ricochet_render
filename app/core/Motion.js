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
import Intro from './Intro';
import Logo from './Logo';

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

   this.currentNbr = 0;

   this.scene = new Scene( this.w, this.h );

   this.elements = [];
   this.echoes = [];

   this.addElements();
   this.canShow = false;

   this.introPlaying = true;

   this.hide();
  //  this.show();

 }

 playIntro() {
   this.intro.show();
 }

 addElements() {
    this.table = new PIXI.Graphics();
    this.table.beginFill(0xffffff);

    this.table.drawCircle(this.w / 2, this.h / 2, this.h / 2);
    this.scene.addChild(this.table);

    // this.intro = new Intro(this.w / 2, this.h / 2);
    // this.scene.addChild(this.intro);
    // this.elements.push(this.intro);

    this.logo = new Logo(this, this.w / 2, this.h / 2);
    var self = this;
    setTimeout(function() {
      self.scene.addChild(self.logo.createAnim(self.w / 2, self.h / 2));
      self.logo.showStart();
    }, 3000);
    // this.elements.push(this.logo);

    this.factory = new EchoFactory(this);
    this.tuto = new Tuto(this.scene.width / 2, this.scene.height / 2);
    this.scene.addChild(this.tuto);
    this.elements.push(this.tuto);

    this.timer = new Timer(this, this.scene.width / 2, this.scene.height / 2, this.scene.height / 2 - 50);
    this.scene.addChild(this.timer);
    // this.elements.push(this.timer);

    this.button = new Button(this.scene.width / 2, 110);
    // this.scene.addChild(this.button);
    // this.elements.push(this.button);
    // this.button.activate(this);

    this.table.interactive = true;
    this.table.on('mouseup', () => this.onButtonUp());

    // this.show();
 }

 show() {
   this.canShow = true;
   var length = this.elements.length;
   for (var i = 0; i < length; i++) {
     this.elements[i].show();
   }
   this.introPlaying = false;
 }

 hide() {
   var length = this.elements.length;
   for (var i = 0; i < length; i++) {
     this.elements[i].hide();
   }
 }

 onButtonUp(mouseData) {
   //
  //  this.currentNbr  = (this.currentNbr + 1) % 4;
  //  this.displayTuto(caca);

   let mousePosition = this.scene.renderer.plugins.interaction.mouse.global;
   this.createEcho(mousePosition.x, mousePosition.y, 1);
 }

 toggleTimer() {
   if (!this.timer.isOn ) {
    //  this.button.hide();
     this.timer.show();
   } else {
    //  this.button.show(2);
     this.timer.stopCountdown();
     this.timer.hide();
   }
 }

 displayTuto(nbr) {
   if (!this.introPlaying) {
    //  if (nbr > 2) {
    //    this.button.show(0);
    //  } else {
    //    this.button.hide();
    //  }
     if(this.currentNbr < 1 && nbr > 0) {
       this.tuto.stroke.hide();
       this.logo.anim.play();
     } else if (this.currentNbr > 0 && nbr < 1) {
       this.tuto.stroke.show();
       this.introPlaying = true;
       this.logo.anim.gotoAndPlay(0);
     }
     if(this.canShow) this.tuto.displayText( nbr );
     this.currentNbr = nbr;
   }

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
   if(this.logo) this.logo.update(this.currentNbr);

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
 createEcho(x, y, id) {
   if(this.canShow) {
     this.tuto.displayText( this.currentNbr, true );
     let echoes = ["lower", "middle-low", "low", "high", "middle-high", "higher"];
     let echo;
      if (id < 0) echo = this.factory.createEcho(echoes[Math.floor(Math.random() * echoes.length)], x, y);
      else echo = this.factory.createEcho(echoes[5 - id], x, y);
      console.log(id);
      this.scene.addChildAt(echo, 1);
      echo.show();
      this.echoes.push(echo);
   }
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
