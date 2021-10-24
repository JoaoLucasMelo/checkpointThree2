import { ProxyState } from "../AppState.js"
import { Stickers } from "../Models/Sticker.js"



class StickersService {
  constructor() {

  }

  createSticker(newSticker) {
    const sticker = new Stickers(newSticker)
    ProxyState.stickers = [...ProxyState.stickers, sticker]
  }

  removeSticker(id) {
    if (window.confirm('Are you sure? Press OK to Delete')) {
      ProxyState.stickers = ProxyState.stickers.filter(s => s.id != id)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.taskId != id)
    }
  }

}

export const stickersService = new StickersService()