import { stickersService } from "../Services/StickersService.js";
import { ProxyState } from "../AppState.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";



function _draw() {
  const stickers = ProxyState.stickers
  let template = ''
  stickers.forEach(s => template += s.Template)
  document.getElementById('stickers').innerHTML = template
}

export class StickersController {
  constructor() {
    ProxyState.on('stickers', _draw)
    ProxyState.on('stickers', saveState)
    ProxyState.on('tasks', _draw)
    ProxyState.on('tasks', saveState)
    loadState()
    _draw()
    }

  createSticker() {
    window.event.preventDefault()
    const formElem = window.event.target
    const newSticker = {
      name: formElem.name.value,
      color: formElem.color.value,
    }
    stickersService.createSticker(newSticker)
    formElem.reset()
  }
  removeSticker(id) {
    stickersService.removeSticker(id)
  }
}