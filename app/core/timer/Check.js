    /**
    *
    * core/timer/Check.js
    *
    **/

    export default class Check extends PIXI.Container {

      /**
       * [Experiment contructor]
       * - Extends PIXI.Container
       * @return void
       */

      constructor(x, y) {

        super();

        let check = [];
        for (let j = 0; j < 7; j++) {
          check.push( PIXI.Texture.fromImage(`imgs/icon_check/icon_check_0000${j}.png`));
        }
        this.check = new PIXI.MovieClip(check);
        this.check.scale.x = this.check.scale.y = .5;
        this.addChild(this.check);
        this.position.x = x - 55 / 2;
        this.position.y = y;

        this.check.animationSpeed = .25;
        this.check.loop = false;

        var spaces1 = "$1 "; // put any number of spaces after the $1

        let text = "ENREGISTRE".replace(/(.)(?=.)/g, spaces1);

        let options = { font:"normal 11px Circular", fill:0x1FC3CD, align:"center"  };
        this.text = new PIXI.Text(text, options);
        this.text.position.x = - this.text.width / 4;
        this.text.position.y = 55;
        this.addChild(this.text);
        this.alpha = 0;

      }

      show() {
        this.check.play();
        TweenMax.fromTo(this.text, .5, {y:70}, {y:55});
        TweenMax.to(this, .5, {alpha: 1, onComplete:() => {
          this.hide();
        }});
      }

      hide() {
        TweenMax.to(this, .5, {delay:2, alpha: 0, onComplete:() => {
          this.check.gotoAndStop(0);
        }});
      }
    }
