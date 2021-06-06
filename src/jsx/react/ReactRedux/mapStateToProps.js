export const mapStateToProps = (state) => {
    return {
      power: state.sound.power,
      vol: state.sound.vol,
      activePad: state.sound.activePad,
      bank: state.sound.bank,
      displayMessage: state.sound.displayMessage,
      keys: state.sound.keys,
      banks: state.sound.banks,
      audioSrc: state.sound.audioSrc,
      isPlay: state.sound.isPlay,
    }
};