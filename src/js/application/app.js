import Wordline from '../wordline/wordline';

import wordLists from '../constants/word-lists';

export default class Application {
  constructor() {
    this.modeSelect = $('.mode-select');
    this.modeTitle = $('.mode-title');

    this.openClass = 'open';
    this.initModeList();

    this.mode = wordLists[0].id;

    this.setMode(this.mode);

    this.bindEvents();
  }

  initModeList() {
    let modeList = wordLists.map(item => {
      return `<li id="${item.id}">${item.name}</li>`;
    });
    $('.mode-dropdown').html(modeList.join(''));
  }

  setMode(mode) {
    let modeTitleText = wordLists.find(item => item.id == mode).name;
    this.modeTitle.text(modeTitleText);
    this.wordline = new Wordline(mode);
    this.wordline.setFocus();
  }

  bindEvents() {
    this.modeSelect.click(e => {
      e.stopPropagation();

      this.modeSelect.toggleClass(this.openClass);
    });

    this.modeSelect.find('li').click(e => {
      e.stopPropagation();

      this.setMode( $(e.target).attr('id') );

      this.modeSelect.removeClass(this.openClass);
    });

    $(document).click(e => {
      this.modeSelect.removeClass(this.openClass);
    });
  }

}