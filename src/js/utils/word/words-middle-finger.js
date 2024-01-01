import Base from './base.js'

const words = [
  '3edc', '8ik,', 'cde3', ',ki8',
  '3kc8', 'dei,', 'c3ei', '8,dk',
  'd3i,', 'ekc8', 'e,i3', '8dck'
];

class WordsMiddleFinger extends Base {
  constructor() {
    super();
    this.random = false;
    this._init(words);
  }
}

export default WordsMiddleFinger;
