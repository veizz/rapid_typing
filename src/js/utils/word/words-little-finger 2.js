import Base from './base.js'

const words = [
  '1qaz', '0p;/', '-=[]', '\\\'',
  "p\\=/", "1]z[", "0-qa';", "'\\/;1",
  "=qpz0", "]a[-", ";1pa", "=-\\[", "'q]/z0",
  "\\za0", ";=q-", "1[p'/]"
];

class WordsLittleFinger extends Base {
  constructor() {
    super();
    this.random = false;
    this._init(words);
  }
}

export default WordsLittleFinger;
