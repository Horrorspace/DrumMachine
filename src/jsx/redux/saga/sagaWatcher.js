import { takeEvery} from 'redux-saga/effects'
import {getNewMessage, playSound, changeActivePad, changeVol, switchPower,
    changeBank, pushButton, clickButton, togglePlay, stopSound} from '@redux/types.js'
import sagaOnBankChange from '@redux/saga/effects/sagaOnBankChange.js'
import sagaOnPowerSwitch from '@redux/saga/effects/sagaOnPowerSwitch.js'
import sagaOnVolChange from '@redux/saga/effects/sagaOnVolChange.js'
import sagaPlaySound from '@redux/saga/effects/sagaPlaySound.js'


export default function* sagaWatcher() {
    yield takeEvery(pushButton, sagaPlaySound);
    yield takeEvery(clickButton, sagaPlaySound);
    yield takeEvery(changeVol, sagaOnVolChange);
    yield takeEvery(switchPower, sagaOnPowerSwitch);
    yield takeEvery(changeBank, sagaOnBankChange);
  }