import {getNewMessageAction, playSoundAction, stopSoundAction, togglePlayAction,
    changeActivePadAction, changeVolAction, switchPowerAction,
    changeBankAction, pushButtonAction, clickButtonAction} from '@redux/actions.js'

export const mapDispatchToProps = (dispatch) => {
    return {
      getNewMessage: (msg) => {
        dispatch(getNewMessageAction(msg))
      },
      playSound: () => {
        dispatch(playSoundAction())
      },
      stopSound: () => {
        dispatch(stopSoundAction())
      },
      togglePlay: () => {
        dispatch(togglePlayAction())
      },
      clickButton: (key) => {
        dispatch(clickButtonAction(key))
      },
      pushButton: (keyCode) => {
        dispatch(pushButtonAction(keyCode))
      },
      changeBank: (bank) => {
        dispatch(changeBankAction(bank))
      },
      switchPower: () => {
        dispatch(switchPowerAction())
      },
      changeVol: (vol) => {
        dispatch(changeVolAction(vol))
      },
      changeActivePad: (pad) => {
        dispatch(changeActivePadAction(pad))
      },
    }
  };