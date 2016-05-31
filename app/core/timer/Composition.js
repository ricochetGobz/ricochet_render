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
    this.name = "name";
    this.author = "author";
    this.time = Date.now();
    this.duration = 0;

  }

  addNote( data ) {
    console.log(data);
    this.timeline.push( {
      position: {
        x: data.x,
        y: data.y
      },
      time:this.parseTime(Date.now() - this.time),
      cube: data.cubeId,
      sound: data.soundId
    } );
  }

  get name() {
      return this._name;
  }

  set name(newName){
      if(newName){
          this._name = newName;
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

  // get time() {
  //       return this._time;
  //   }
  //
  // set time(newDate){
  //     if(newDate){
  //         this.time = newDate;
  //     }
  // }

  // get duration() {
  //       return this._duration;
  //   }
  //
  // set duration(newDuration){
  //     if(newDuration){
  //         this.duration = newDuration;
  //     }
  // }

  parseTime(ms) {
     let min = (ms/1000/60) << 0,
      sec = ((ms/1000) % 60).toFixed(0);

    return {min:min, sec:sec};
  }

}
