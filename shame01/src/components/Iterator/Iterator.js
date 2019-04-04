import { BaseLogic } from '../../plugin/BaseLogic';

class Iterator extends BaseLogic {
  constructor() {
    super()
    this.createUI();
  }
  createUI() {
    console.log('this is Iterator');
  }
}

export {
  Iterator
}