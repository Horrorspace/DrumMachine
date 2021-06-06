import {getNewMessage, playSound, changeActivePad, changeVol, switchPower,
    changeBank, pushButton, clickButton, togglePlay, stopSound} from '@redux/types.js'

export const getNewMessageAction = (message) => {
    return {
      type: getNewMessage,
      message: message,
    }
}
export const playSoundAction = () => {
    return {
        type: playSound,
    }
}
export const stopSoundAction = () => {
    return {
        type: stopSound,
    }
}
export const togglePlayAction = () => {
    return {
        type: togglePlay,
    }
}
export const changeActivePadAction = (pad) => {
    return {
        type: changeActivePad,
        pad: pad,
    }
}
export const changeVolAction = (vol) => {
    return {
        type: changeVol,
        vol: vol,
    }
}
export const switchPowerAction = () => {
    return {
        type: switchPower,
    }
}
export const changeBankAction = (bank) => {
    return {
        type: changeBank,
        bank: bank,
    }
}
export const pushButtonAction = (keyCode) => {
    return {
        type: pushButton,
        keyCode: keyCode,
    }
}
export const clickButtonAction = (key) => {
    return {
        type: clickButton,
        key: key,
    }
}