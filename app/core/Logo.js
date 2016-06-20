/**
*
* core/timer/Button.js
*
**/

// const nbrOfSprites = 1;
const nbrOfSprites = 140;
let animation = [];
let animation2 = [];

export default class Logo {

  /**
   * [Experiment contructor]
   * @return void
   */

  constructor(owner, x, y) {
    this.owner = owner;
    let j;
      // Load images
      for (j = 0; j < nbrOfSprites; j++) {
        let string;
        if (j >= 100) string =  `imgs/logo/logo_00${j}.png`;
        else if (j >=10) string =  `imgs/logo/logo_000${j}.png`;
        else string =  `imgs/logo/logo_0000${j}.png`;
        animation.push( PIXI.Texture.fromImage(string));
      }
      // for (j = 90; j < nbrOfSprites; j++) {
      //   let string;
      //   if (j >= 100) string =  `imgs/logo/logo_00${j}.png`;
      //   else if (j >=10) string =  `imgs/logo/logo_000${j}.png`;
      //   else string =  `imgs/logo/logo_0000${j}.png`;
      //   animation2.push( PIXI.Texture.fromImage(string));
      // }
  }

  createAnim(x, y) {
    this.anim = new PIXI.extras.MovieClip(animation);

    this.anim.position.x = x;
    this.anim.position.y = y;

    this.anim.scale.x = this.anim.scale.y = 0.7;

    this.anim.anchor.x = 0.5;
    this.anim.anchor.y = 0.5;
    this.anim.loop = false;
    this.anim.animationSpeed = .5;

    this.anim.autoplay = false;

    return this.anim;
  }

  createAnimStop(x, y) {
    // this.anim2 = new PIXI.extras.MovieClip(animation2);
    //
    // this.anim2.position.x = x;
    // this.anim2.position.y = y;
    //
    // this.anim2.scale.x = this.anim2.scale.y = 0.35;
    //
    // this.anim2.anchor.x = 0.5;
    // this.anim2.anchor.y = 0.5;
    // this.anim2.loop = false;
    // this.anim2.animationSpeed = .5;
    //
    // this.anim2.autoplay = false;
    //
    // return this.anim2;
  }

  update(nbr) {
    // console.log(this.anim);
    if (this.anim && this.anim.playing && nbr == 0) {
      // console.log(this.anim.currentFrame);
      if (this.anim.currentFrame > 87) {
        console.log('stop');
        this.anim.stop();
        TweenMax.to(this.anim, 1, {y: 50 + this.anim.height * .7, onStart:() => {
          this.owner.show();
          if (this.owner.tutoPlaying) this.owner.displayTuto(0);
        }});
      }
    } else if (this.anim2 && this.anim2.playing) {

    }
  }

  showStart() {
    TweenMax.fromTo(this.anim, .5, {alpha:0}, {alpha: 1, onComplete: () => {
      this.anim.play();
    }});
  }



}
