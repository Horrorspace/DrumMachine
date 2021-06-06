import {put} from 'redux-saga/effects'
import {store} from '@redux/store.js'
import {getNewMessageAction} from '@redux/actions.js'

export default function* sagaOnBankChange() {
    const st = store.getState();
    if(st.sound.power) {
      yield put(getNewMessageAction(st.sound.bank.name));
    }
}