import {keys} from '@global/consts/globalAppData.js'
import {bankOne, bankTwo, banksArr} from '@global/consts/globalAppProdData.js'


export const defaultState = {
    power: true,
    vol: 0.3,
    activePad: '',
    bank: bankOne,
    displayMessage: '',
    keys: keys,
    banks: banksArr,
    audioSrc: '',
    isPlay: false,
  };