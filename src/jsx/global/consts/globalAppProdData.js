import {bankOneSrc, bankTwoSrc, keys} from '@global/consts/globalAppData.js'
import {getBankObject} from '@global/functions/globalAppFunc.js'
import PadData from '@global/classes/PadData.js'


export const bankOne = getBankObject('bankOne', bankOneSrc, keys, PadData);
export const bankTwo = getBankObject('bankTwo', bankTwoSrc, keys, PadData);
export const banksArr = [bankOne, bankTwo];