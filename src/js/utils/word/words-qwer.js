import Base from './base.js'

const words = [
  'qwert', 'yuiop', '[]\\', 'qwertyuiop[]\\',
  '][poiu', 'ytrewq', 'qw\\[]yu', 'periot', 'rw\\yit', 'eupq]o[',
  'tr\\[ew]', 'ioyuqp', 'rye\\p]', '[twuiqo', 'y]tiu', '\\o[repwq'
];

class WordsQWER extends Base {
  constructor() {
    super();
    this.random = false;
    this._init(words);
  }
}

export default WordsQWER;
