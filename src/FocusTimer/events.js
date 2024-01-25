import { controls, minutes } from './elements.js'
import * as actions from "./actions.js"
import state from './state.js'

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  })

  musics.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  })
}