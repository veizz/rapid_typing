import Base from './base.js'

const words = [
  '2wsx', '9ol.', 'xsw2', '.lo9',
  's92w', 'x.lo', '2.ws', 'lx9o',
  '.xsl', 'ow29', 'x2wl', 'so.9',
  '.2xw', '9ols', 'os.2', '9wxl'
];

class WordsForthFinger extends Base {
  constructor() {
    super();
    this.random = false;
    this._init(words);
  }
}

export default WordsForthFinger;
