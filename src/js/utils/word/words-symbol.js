import Base from './base.js'
const words = [
  '{}', '()', '[]', '||', '&&', '!', '//',
  ';,.:', '->', '=>', '>>', '<<',
  '""\'\'', '/* */', '//', '#',
  '`', '!', '~', '@', '$', '%', '^', '&', '*', '-', '+', '=', '|', '\\', '/',
]

class WordsSymbol extends Base {
  constructor() {
    super();
    this.random = false;
    this._init(words);
  }

}

export default WordsSymbol;