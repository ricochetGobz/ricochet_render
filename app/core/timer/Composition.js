/**
*
* core/timer/Composition.js
*
**/

export default class Composition extends Object {

  /**
   * [Experiment contructor]
   * - Extends PIXI.DisplayObjectContainer
   * @return void
   */

  constructor() {

    super();
    this.timeline = [];
    this.name = "name";
    this.author = "author";
    this.date = Date.now();
    this.duration = 0;

  }

  addNote( data ) {
    this.timeline.push( {
      position: {
        x: data.x,
        y: data.y
      },
      time:this.parseTime(Date.now() - this.date),
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

  set authour(newAuthor){
      if(newAuthor){
          this._author = newAuthor;
      }
  }

  get date() {
        return this._date;
    }

  set date(newDate){
      if(newDate){
          this.date = newDate;
      }
  }

  get duration() {
        return this._duration;
    }

  set date(newDuration){
      if(newDuration){
          this.duration = newDuration;
      }
  }

  parseTime(ms) {
     let min = (ms/1000/60) << 0,
      sec = (ms/1000) % 60;

    return {min:min, sec:sec};
  }

}
