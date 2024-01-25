import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
  if(state.isRunning) {
    playDefault()
  }
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  stopMusics()
  resetIsMusics()
  removeSelected()
}

export function togglePlus() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  minutes = minutes + 5
  if(minutes > 60) {
    minutes = 60
  }
  seconds = 0

  timer.updateDisplay(minutes, seconds)
}

export function toggleMinus() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  minutes = minutes - 5
  if(minutes < 0) {
    minutes = 0
  }
  seconds = 0

  timer.updateDisplay(minutes, seconds)
}

export function playFlorest() {
  removeSelected()
  stopMusics()
  if(state.isMusicFlorest) {
    resetIsMusics()
    return
  }
  resetIsMusics()
  state.isMusicFlorest = true
  el.buttonFlorest.classList.add('selected')
  sounds.florestMusic.play()
}

export function playRain() {
  removeSelected()
  stopMusics()
  if(state.isMusicRain) {
    resetIsMusics()
    return
  }
  resetIsMusics()
  state.isMusicRain = true
  el.buttonRain.classList.add('selected')
  sounds.rainMusic.play()
}
export function playCoffee() {
  removeSelected()
  stopMusics()
  if(state.isMusicCoffee) {
    resetIsMusics()
    return
  }
  resetIsMusics()
  state.isMusicCoffee = true
  el.buttonCoffee.classList.add('selected')
  sounds.coffeeMusic.play()
}
export function playFire() {
  removeSelected()
  stopMusics()
  if(state.isMusicFire) {
    resetIsMusics()
    return
  }
  resetIsMusics()
  state.isMusicFire = true
  el.buttonFire.classList.add('selected')
  sounds.fireMusic.play()
}


function stopMusics() {
  sounds.coffeeMusic.pause()
  sounds.rainMusic.pause()
  sounds.florestMusic.pause()
  sounds.fireMusic.pause()
}

function resetIsMusics() {
  state.isMusicCoffee = false
  state.isMusicFire = false
  state.isMusicFlorest = false
  state.isMusicRain = false
}

function removeSelected() {
  el.buttonFlorest.classList.remove('selected')
  el.buttonCoffee.classList.remove('selected')
  el.buttonFire.classList.remove('selected')
  el.buttonRain.classList.remove('selected')
}

function playDefault() {
  if(!state.isMusicCoffee
    && !state.isMusicFire
    && !state.isMusicFlorest
    && !state.isMusicRain) {
      playFlorest()
  }
}