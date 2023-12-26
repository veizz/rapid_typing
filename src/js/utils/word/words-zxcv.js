import Base from './base.js'

const words = [
  'zxcvb', 'nm,./', 'zxcvbnm,./', 'mnbvcxz', '/.,mnb',
  'zxcvb', 'nm,./', '/vxn,', 'czmb.', 'vmxz/', 'bc,.n',
  'cx/,n', '.bmzv', 'mz,v/', '.xnbc', '.xcnz', 'm,/vb',
  'vmcn/', 'b.,zx', 'zmx.,', 'nbcv/', 'm.,zx', '/cvbn'
];

class WordsZXCV extends Base {
  constructor() {
    super();
    this.random = false;
    this._init(words);
  }
}

export default WordsZXCV;
