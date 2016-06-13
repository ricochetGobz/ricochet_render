import Motion from './Motion';
import TweenMax from 'gsap';

class App {

  /**
   * App contructor
   * @return void
   */
  constructor() {

    this.ready = true;

  }

  /**
   * start
   * @return void
   */
  start() {
    this.el = document.querySelector( '.app' );

    this.DELTA_TIME = 0;
    this.LAST_TIME = Date.now();

    this.motion = new Motion( "content" );
    this.motion.attachToContainer();

    this.addListeners();

  }
  /**
   * addListeners
   * @return void
   */
  addListeners() {

    window.addEventListener( 'resize', this.onResize.bind(this) );
    TweenMax.ticker.addEventListener( 'tick', this.update.bind(this) )

  }

  /**
   * update
   * - Triggered on every TweenMax tick
   * @return void
   */
  update() {

    this.DELTA_TIME = Date.now() - this.LAST_TIME;
    this.LAST_TIME = Date.now();

    this.motion.update( this.DELTA_TIME );
    this.motion.render();

  }

  /**
   * onResize
   * - Triggered when window is resized
   * @param  {obj} evt
   * @return void
   */
  onResize( evt ) {
    let resolution = window.innerHeight / 3;

    let w = resolution * 4;
    let h = resolution * 3;

    this.motion.resize( w, h );     // WARN NEVER USED
  }

}

module.exports = App;
