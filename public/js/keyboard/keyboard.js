export default class Keyboard {
  constructor() {
    this.root = $('.keyboard-container');
    this.keys = $('.keyboard-container .key');
    this.tools = $('.keyboard-toolbar .tool')
    this.keyTargetClass = 'key-target';
    this.righthandedSpace = 'righthand';

    this.leftHalf = 'q w e r t a s d f g z x c v b ` 1 2 3 4 5'.split(/\s/);
    this.upperSymbol = '~!@#$%^&*()_+{}|:"<>?'.split('');
    this.lowerCasedLetter = 'abcdefghijklmnopqrstuvwxyz`1234567890-=[]\\;\',./'.split('');
    this.upperCasedLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+{}|:"<>?'.split('');
    this.symboSelectors = {
      '`': 'backquote',
      '-': 'minus',
      '=': 'equal',
      '[': 'bracket-left',
      ']': 'bracket-right',
      '\\': 'backslash',
      ';': 'semicolon',
      '\'': 'quote',
      ',': 'comma',
      '.': 'dot',
      '/': 'slash',
    };

    this._bindEvents();
  }

  _bindEvents() {
    this.tools.filter('#keyboard-toggle').click(e => {
      this.root.toggleClass('hidden');
    });

    this.tools.filter('#hands-toggle').click(e => {
      this.root.toggleClass('non-hands');
    });

    this.tools.filter('#color-toggle').click(e => {
      this.root.toggleClass('colorful');
    });
  }

  _isUpper(letter) {
    // return letter == letter.toUpperCase() || this._isUpperSymbol(letter);
    return this.upperCasedLetter.includes(letter);
  }

  _isUpperSymbol(letter) {
    return this.upperSymbol.includes(letter);
  }

  _isIn(array, item) {
    return array.includes(item);
  }

  _handForSpace(pressed) {
    return this.leftHalf.includes(pressed) ? this.righthandedSpace : ''
  }

  _toUpper(letter) {
    if (this.upperCasedLetter.includes(letter)) {
      return letter;
    }
    return this.upperCasedLetter[this.lowerCasedLetter.indexOf(letter)];
  }

  _toLower(letter) {
    console.log(letter);
    if (this.lowerCasedLetter.includes(letter)) {
      return letter;
    }
    return this.lowerCasedLetter[this.upperCasedLetter.indexOf(letter)];
  }

  _getKeySelector(letter) {
    if(/\w/.test(letter)) {
      return letter;
    }
    return this.symboSelectors[letter];
  }

  highlight(pressed, toPress) {

    this.keys.removeClass(this.keyTargetClass);

    if(toPress == 'space') {
      let space = this.keys.filter('#space');

      if(space.hasClass(this.righthandedSpace)) {
        space.removeClass(this.righthandedSpace);
      }

      space.addClass(this.keyTargetClass + ' ' + this._handForSpace(pressed));
    } else {

      let isUpper = this._isUpper(toPress);

      // toPress = toPress.toLowerCase();
      toPress = this._toLower(toPress);


      if(isUpper) {

        let side = this.leftHalf.includes(toPress) ? 'r' : 'l'; // r - right hand (l - left)

        this.keys.filter(`#shift-${side}`).addClass(this.keyTargetClass);
      }

      // this.keys.filter(`#${toPress}`).addClass(this.keyTargetClass);
      this.keys.filter(`#${this._getKeySelector(toPress)}`).addClass(this.keyTargetClass);

    }

  }
}
