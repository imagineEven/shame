import HtmlScroll from './scroll.html';
import { BaseLogic } from '../../plugin/BaseLogic.js';
class Scroll extends BaseLogic {
  constructor() {
    super()
    console.log('---------------------scroll');
    this.init()
  }

  init() {
    this.punctuation = [".", ",",";","?","!","-","/","@","<",">","\"","'","&","！","’"];
    let sentenceArr = [{ text: 'this is the ......page', line: 1 }, { text: 'nothing to be so simple do "this",' }];
    // 希望变成 this.wordArr
    // [{ text: [{text:this}, {text:is}, {text:the} {text:',', punctuation: 'f'}], line: 1 }, { text: 'nothing to be so simple do "this",' }];
    this.convertWordOther(sentenceArr);

  }


  convertWordOther(sentenceArr) {
    sentenceArr.forEach(element => {
      let text = element.text;
      element.text = this.changeToArr(text);
    });
    this.createWordArr(sentenceArr);
    console.log('this.wordArr', this.wordArr);
  }

  createWordArr(sentenceArr) {
    console.log(sentenceArr);
    this.wordArr = [];
    sentenceArr.forEach(element => {
      element.text.forEach((textItem, textIndex) => {
        if (textIndex === element.text.length - 1 && element.line) {
          textItem.line = element.line
        }
        this.wordArr.push(textItem);
      })
    })
  }

  changeToArr(text) {
    // [{text:this}, {text:is}, {text:the} {text:',', punctuation: 'f'}];
    let textArr = [];
    text.split(' ').forEach(item => {
      if (this.checkHasPunctuation) {
        // 有标点符号
        this.decompose(item).forEach(element => {
          textArr.push(element);
        })
      } else {
        let obj = {};
        obj.word = item;
        textArr.push(obj);
      }
    })
    return textArr;
    // console.log('textArr', textArr)
  }

  checkHasPunctuation(word) {
    let flag = false;
    this.punctuation.forEach(element => {
      if(word.indexOf(element) !== -1) {
        flag = element;
      }
    })
    return flag;
  }

  decompose(word) {
    let innerArr = [];
    // [{text:the} {text:',', punctuation: 'f'}]
    let textArr = word.split('');
    let json = '';
    textArr.forEach((item, index) => {
      let variable = this.checkHasPunctuation(item);
      if (variable) {
        if (json) {
          // json 有的情况；
          let objOne = {};
          objOne.text = json;
          innerArr.push(objOne);
          json = '';
        }
        let objTwo = {};
        objTwo.text = item;
        let punctuation = 'm'
        if (index === 0) {
          punctuation = 'h'
        } else if (index === word.length - 1) {
          punctuation = 'f'
        }
        objTwo.punctuation = punctuation;
        innerArr.push(objTwo);
        // 是标点符号；
      } else {
        json = json + item;
        if (index === word.length - 1) {
          let obj = {};
          obj.text = json;
          innerArr.push(obj);
        }
      }
    })
    return innerArr;
  }

  addWord(word) {
    let json = '';
    textArr.forEach(item => {
      let obj = {}
      let variable = this.checkHasPunctuation(item);
      if (variable) {
        // 是标点符号；
      } else {
        json = josn + item;
      }
    })
  }addWord(word) {
    let json = '';
    textArr.forEach(item => {
      let obj = {}
      let variable = this.checkHasPunctuation(item);
      if (variable) {
        // 是标点符号；
      } else {
        json = josn + item;
      }
    })
  }
}


export {
  Scroll
}

