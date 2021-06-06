import {defaultState} from '@redux/defaultState.js'
import {getNewMessage, playSound, changeActivePad, changeVol, switchPower,
    changeBank, pushButton, clickButton, togglePlay, stopSound} from '@redux/types.js'


export const soundReducer = (state = defaultState, action) => {
    switch (action.type) {
      case pushButton:
        const filteredBtnArr = state.bank.pads.filter(val => val.keyId === action.keyCode);
        if(typeof(filteredBtnArr) === 'object' 
           &&  Array.isArray(filteredBtnArr)
           && filteredBtnArr.length > 0) {
          return {
            ...state,
            activePad: filteredBtnArr[0],
            isPlay: true,
          }
        }
        else {
          return state
        }
      case clickButton:
        let filteredClickArr = state.bank.pads.filter(val => val.key === action.key);
        if(typeof(filteredClickArr) === 'object' 
           &&  Array.isArray(filteredClickArr)
           && filteredClickArr.length > 0) {
          return {
            ...state,
            activePad: filteredClickArr[0],
            isPlay: true,
          }
        }
        else {
          return state
        }
      case playSound:
        return {
          ...state,
          audioSrc: state.activePad.src,
        };
      case stopSound:
        return {
          ...state,
          audioSrc: '',
        };
      case togglePlay:
        if(state.isPlay) {
          return {
            ...state,
            isPlay: false,
          };
        }
        else {
          return {
            ...state,
            isPlay: true,
          }
        }
      case getNewMessage:     
        return {
          ...state,
          displayMessage: action.message,
        }
      case changeActivePad:     
         return {
           ...state,
           activePad: action.pad,
         }
      case changeVol:     
         return {
           ...state,
           vol: action.vol,
           activePad: '',
         }
      case switchPower:     
        if(state.power) {
          return {
            ...state,
            power: false,
            activePad: '',
          };
        }
        else {
          return {
            ...state,
            power: true,
            activePad: '',
          }
        }
      case changeBank:     
        return {
          ...state,
          bank: action.bank,
          activePad: '',
        }
      default:
        return state;
    }
};