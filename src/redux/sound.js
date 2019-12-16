
import {Howl} from "howler"


export default store => next => action => {
  const {main} = store.getState()
  if (main.mode === "user") {
    if (action.type === "@@sound/play/startingRender") {
      startingRenderSound.play()
    }
    if (action.type === "@@sound/play/exportFinished") {
      exportFinishedSound.play()
    }
    if (action.type === "@@sound/play/render") {
      renderSound.play()
    }
  }
  return next(action)
}