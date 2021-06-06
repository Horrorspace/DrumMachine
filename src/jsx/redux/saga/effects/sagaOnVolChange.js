import {put, call} from 'redux-saga/effects'
import {store} from '@redux/store.js'
import {getNewMessageAction} from '@redux/actions.js'


export default function* sagaOnVolChange() {
    const st = store.getState();
    const msg = Math.round(st.sound.vol*100);
    const delay = time => new Promise(resolve => setTimeout(resolve, time));
    if(st.sound.power) {
      yield put(getNewMessageAction(`Volume: ${msg}`));
      yield call(delay, 800);
      yield put(getNewMessageAction(''));
    }
  }