export function getKeysId(keysArr = []) {
    return keysArr.map(value => value.charCodeAt(0))
  }
export function getPadName(str = '') {
    const regExpStart = /^https:\/\/s3\.amazonaws.com\/freecodecamp\/drums\//;
    const regExpEnd = /\.mp3/;
  
    return str
      .replace(regExpStart, '')
      .replace(regExpEnd, '')
  }
export  function getPadNames(getNameFunc = x => x, bankSrcArr = []) {
    return bankSrcArr.map(value => getNameFunc(value))
  }
export function getBankPads(className, bankSrc, keys) {
    const pads = [];
    for (let i in keys) {
      pads.push(new className(bankSrc[i], keys[i]));
    }
    return pads
  }
export function getBankObject(name, bankSrc, keys, className) {
    return {
      name: name,
      pads: getBankPads(className, bankSrc, keys),
    }
  }