import {put} from 'redux-saga/effects'
import {store} from '@redux/store.js'
import {getNewMessageAction, togglePlayAction} from '@redux/actions.js'

export default function* sagaPlaySound() {
    const st = store.getState();
    if(st.sound.power && st.sound.isPlay) {
      const audio = new Audio(st.sound.activePad.src);
      audio.volume = st.sound.vol;
      yield put(getNewMessageAction(st.sound.activePad.name));
      yield audio.play();
      yield put(togglePlayAction());
    }
  }