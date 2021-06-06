import {getPadName} from '@global/functions/globalAppFunc.js'

export default class PadData {
    constructor(src, key) {
      this.name = getPadName(src);
      this.src = src;
      this.key = key
      this.keyId = key.charCodeAt(0);
    }
  }