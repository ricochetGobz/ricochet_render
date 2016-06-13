/**
*
* core/Scene.js
*
**/

import { pixi as Pixi } from 'pixi.js';
import interact from 'interact.js';

export default class Scene {

  /**
   * [Scene contructor]
   * @return void
   */
  constructor( _width, _height ) {

    this.width = _width;
    this.height = _height;

    this.ratio = this._getRatio();

    this.children = [];

    this.stage = new PIXI.Stage(0x000000);
    this.renderer = new PIXI.WebGLRenderer( this.width, this.height,{antialias: true});
    this.renderer.backgroundColor = 0x000000;
    this.renderer.view.className = 'resize-drag';

    console.log(this.renderer);

    interact('.resize-drag')
      .draggable({
        onmove: this.onMove.bind(this),
      })
      .resizable({
        preserveAspectRatio: true,
        edges: { left: true, right: true, bottom: true, top: true },
      })
      .on('resizemove', this.onResize.bind(this));

      this.test2 = new PIXI.Graphics();


  }

  /**
   * [Scene addChild]
   * - Add child to the stage
   * @param {obj} child
   */
  addChild( child ) {

    // has to be an instance of PIXI.DisplayObject PIXI.DisplayObject
    if ( child instanceof PIXI.DisplayObject === false ) {
      throw "child has to be an instance of PIXI.DisplayObject";
    }

    this.stage.addChild( child );

  }
  /**
   * [Scene addChildAt]
   * - Add child to the stage at index
   * @param {obj} child
   * @param int index
   */
  addChildAt( child, index ) {

    // has to be an instance of PIXI.DisplayObject PIXI.DisplayObject
    if ( child instanceof PIXI.DisplayObject === false ) {
      throw "child has to be an instance of PIXI.DisplayObject";
    }

    this.stage.addChildAt( child, index );

  }

  /**
   * [Scene removeChild]
   * - Remove child to the stage
   * @param {obj} child
   */
  removeChild( child ) {

    // has to be a PIXI.DisplayObject or child of PIXI.DisplayObject
    this.stage.removeChild( child );
  }

  /**
   * [Scene onMove]
   * - Interact.js when resize canvas.
   * @param {obj} event
   * @return void
   */
  onMove(event) {
    const target = event.target;
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform = target.style.transform = `translate(${x}px, ${y}px)`;

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  /**
   * [Scene onResize]
   * - Interact.js when resiz canvas.
   * @param {obj} event
   * @return void
   */
  onResize(event) {
    const target = event.target;
    let x = (parseFloat(target.getAttribute('data-x')) || 0);
    let y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width = `${event.rect.width}px`;
    target.style.height = `${event.rect.height}px`;

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform = `translate(${x}px, ${y}px)`;

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    this.width = Math.round(event.rect.width);
    this.height = Math.round(event.rect.height);
    // this.ratio = this._getRatio(); // DON T RECALCULATE THE RATIO

    target.textContent = `${Math.round(event.rect.width)}×${Math.round(event.rect.height)}`;
  }

  /**
   * [Scene render]
   * - PIXI Renderer renders the PIXI stage
   * @return void
   */
  render() {

    this.renderer.render( this.stage );

  }

  /**
   * [Scene resize]
   * - Called by the parent when window's resized
   * @param  {number} _width
   * @param  {number} _height
   * @return void
   */
  // resize( _width, _height ) {
  //
  //   this.width = _width;
  //   this.height = _height;
  //
  //   this.renderer.view.style.width = this.width + 'px';
  //   this.renderer.view.style.height = this.height + 'px';
  // }

  _getRatio() {
    return (this.width / 640);
  }

}
