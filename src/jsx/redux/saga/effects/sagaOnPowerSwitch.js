import {put, call} from 'redux-saga/effects'
import {store} from '@redux/store.js'
import {getNewMessageAction} from '@redux/actions.js'

export default function* sagaOnPowerSwitch() {
    const st = store.getState();
    const delay = time => new Promise(resolve => setTimeout(resolve, time));
    let msg;
    if(st.sound.power) {
      msg = 'on';
    }
    else {
      msg = 'off';
    }
    yield put(getNewMessageAction(`Power is ${msg}`));
    yield call(delay, 800);
    yield put(getNewMessageAction(''));
}