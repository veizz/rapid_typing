import Base from './base.js'

const words = [
  '1234567890', '`12345', '67890-=',
  '=-09876', '54321', '81-=02', '639457', '65408', '3927=1-',
  '68=-01', '254793', '53906', '=82174-', '3429=0', '5-7681'
];

class WordsNumber extends Base {
  constructor() {
    super();
    this.random = false;
    this._init(words);
  }
}

export default WordsNumber;
