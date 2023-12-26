const ROW_WORD_COUNT = 8;
const words = ["a", "b", "c", "d"];
export default class WordsBase {
  constructor() {
    this._init(words);
  }

  _init(wordArr) {
    this.words = wordArr.slice();
    this.currentRowIndex = 0;
    this.rowWordCount = ROW_WORD_COUNT;
  }

  /**
   * get a list of words to format one line of text
   * @returns {Array} - list of words
   */
  getLine() {
    let start = this.currentRowIndex * this.rowWordCount;
    if (start >= this.words.length) {
      this.currentRowIndex = 0;
      start = 0;
    }
    const end = start + this.rowWordCount;
    this.currentRowIndex++;
    return this.words.slice(start, end);
  }

  getName() {
    return this.name;
  }

  reset() {
    this._init(words);
  }
}