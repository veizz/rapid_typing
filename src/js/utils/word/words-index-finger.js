import Base from './base.js'

const words = [
  '4rfv', '5tgb', '7ujm', '6yhn',
  'u4rb', '5njf', '7mhy', '6vtg',
  'fu7h', 'rb6y', 't4mg', 'j5nv',
  'hrfn', 'yv76', 'tjg5', 'bm4u',
  '56h4', 'rbuy', 'fgnj', 'v7tm',
  '4yrb', 'gnjv', 'tfuh', '76m5',
  'jtn6', 'hm7v', 'f5rb', 'y4gu'
];

class WordsIndexFinger extends Base {
  constructor() {
    super();
    this.random = false;
    this._init(words);
  }
}

export default WordsIndexFinger;
