import Base from './base.js'

const words = [
  'asdf', 'gh', 'jkl;', 'asdfg', 'hjkl;\'',
  'gfdsa', 'lkjh', 'kagjs', ';hfld', 'asdjf', ';lk',
  'lakjd', 'f;lk', 'kdjsf', 'hal;g', 'sg;kl', 'adhfj',
  'gfdsa', 'lkjh', 'kagjs', ';hfld', 'asdjf', ';lk',
  'asdf', 'gh', 'jkl;', 'asdfg', 'hjkl;\'',
  'lakjd', 'f;lk', 'kdjsf', 'hal;g', 'sg;kl', 'adhfj',
];

class WordsASDF extends Base {
  constructor() {
    super();
    this.random = false;
    this._init(words);
  }
}

export default WordsASDF;
