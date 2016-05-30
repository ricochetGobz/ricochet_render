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

  }

  addNote( data ) {
    this.timeline.push( {
      position: {
        x: data.x,
        y: data.y
      },
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

}
