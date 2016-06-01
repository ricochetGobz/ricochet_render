/**
*
* core/timer/Composition.js
*
**/

export default class Composition {

  /**
   * [Experiment contructor]
   * - Extends PIXI.DisplayObjectContainer
   * @return void
   */

  constructor() {

    // super();
    this.timeline = [];
    this.title = "name";
    this.author = "author";
    this.createdAt = Date.now();
    this.duration = 0;
    this.id = 0;

  }

  addNote( data ) {
    console.log(data);
    this.timeline.push( {
      position: {
        x: data.x,
        y: data.y
      },
      createdAt:this.parseTime(Date.now() - this.createdAt),
      cube: data.cubeId,
      sound: data.soundId
    } );
  }

  get title() {
      return this._title;
  }

  set name(newTitle){
      if(newTitle){
          this._title = newTitle;
      }
  }

  get author() {
    return this._author;
  }

  set author(newAuthor){
      if(newAuthor){
          this._author = newAuthor;
      }
  }

  parseTime(ms) {
     let min = (ms/1000/60) << 0,
      sec = ((ms/1000) % 60).toFixed(0);

    return {min:min, sec:sec};
  }

}
