import Base from './base.js'

const words = [
  'int', 'main', 'include', 'iostream', 'iomanip',
  'using', 'namespace', 'std', 'return',
  'cout', 'cin', 'if', 'else', 'for',
  'while', 'do', 'switch', 'case', 'break',
  'continue', 'void', 'char', 'string', 'bool',
  'true', 'false', 'const', 'static', 'struct',
  '{}', '()', '[]', '||', '&&', '!', '//',
  ';', ',', '.', ':', '->', '=>', '>>', '<<',
  '""\'\'', '/* */', '//', '#',
  '#include', '#define', '#ifdef', '#ifndef', '#endif',
  '0', '1', '2', '3', '4',
  '5', '6', '7', '8', '9',
  'endl', 'setprecision', 'fixed', 'setfill', 'setw',
];

class WordsCPP extends Base {
  constructor() {
    super();
    this.random = false;
    this._init(words);
  }
}

export default WordsCPP;