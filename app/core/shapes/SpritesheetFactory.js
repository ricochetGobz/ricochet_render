/**
*
* core/timer/Button.js
*
**/

const nbrOfNotes = 6;
// const nbrOfSprites = 10;
const nbrOfSprites = 78;
let animations = [];

export default class SpritesheetFactory {

  /**
   * [Experiment contructor]
   * @return void
   */

  constructor() {

    let i, j;
    for (i = 1; i <= nbrOfNotes; i++) {
      animations[i] = [];

      // Load images
      for (j = 0; j < nbrOfSprites; j++) {
        animations[i].push(
          PIXI.Texture.fromImage(`imgs/son_0${i}/son_0${i}_000${j}.png`)
        );
      }
    }

  }

  createAnim(data, x, y) {
    let id;
    switch (data.name) {
      case "circle":
        id = 1;
      break;
      case "half-circle":
        id = 2;
      break;
      case "shape":
        id = 3;
      break;
      case "square":
        id = 4;
      break;
      case "triangle":
        id = 5;
      break;
      case "wave":
        id = 6;
      break;

    }
    console.log(animations);
    const animNote = new PIXI.extras.MovieClip(animations[id]);

    animNote.position.x = x;
    animNote.position.y = y;

    animNote.anchor.x = 0.5;
    animNote.anchor.y = 0.5;
    animNote.loop = false;
    animNote.animationSpeed = .5;
    animNote.scale.x = 1.35;
    animNote.scale.y = 1.35;

    animNote.rotation = Math.random() * Math.PI;

    animNote.play();

    return animNote;
  }

}
