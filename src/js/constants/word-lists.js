import WordsASDF from "../utils/word/words-asdf";
import WordsQWER from "../utils/word/words-qwer";
import WordsZXCV from "../utils/word/words-zxcv";
import WordsNumber from "../utils/word/words-number";
import WordsCPP from "../utils/word/words-cpp";
import WordsSymbol from "../utils/word/words-symbol";
import WordsDict from "../utils/word/words";
import WordsIndexFinger from "../utils/word/words-index-finger";
import WordsMiddleFinger from "../utils/word/words-middle-finger";
import WordsLittleFinger from "../utils/word/words-little-finger 2";
import WordsForthFinger from "../utils/word/words-forth-finger";

const wordLists = [
  {
    id: "asdf",
    name: "键盘ASDF行",
    class: WordsASDF
  },
  {
    id: "qwer",
    name: "键盘QWER行",
    class: WordsQWER
  },
  {
    id: "zxcv",
    name: "键盘ZXCV行",
    class: WordsZXCV
  },
  {
    id: "number",
    name: "键盘数字行",
    class: WordsNumber,
  },
  {
    id: "index-finger",
    name: "食指区",
    class: WordsIndexFinger,
  },
  {
    id: "middle-finger",
    name: "中指区",
    class: WordsMiddleFinger,
  },
  {
    id: "forth-finger",
    name: "无名指区",
    class: WordsForthFinger
  },
  {
    id: "little-finger",
    name: "小拇指区",
    class: WordsLittleFinger
  },
  {
    id: "cpp",
    name: "C++ 常用词",
    class: WordsCPP
  },
  {
    id: "symbol",
    name: "常用符号",
    class: WordsSymbol,
  },
  {
    id: "english",
    name: "英文文章",
    class: WordsDict
  },
];

export default wordLists;