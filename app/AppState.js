import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Tasks } from "./Models/Task.js"
import { Stickers } from "./Models/Sticker.js"

class AppState extends EventEmitter {

  /** @type {import('./Models/Tasks').Tasks[]} */
    stickers = []
  /** @type {import('./Models/Stickers').Stickers[]} */
    tasks = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
