import { ProxyState } from "../AppState.js";
import { Stickers } from "../Models/Sticker.js";
import { Tasks } from "../Models/Task.js";




export function saveState(){
  
  localStorage.setItem('Stickers', JSON.stringify({
    stickers: ProxyState.stickers,
    tasks: ProxyState.tasks
  }))
}

export function loadState(){

  let data = JSON.parse(localStorage.getItem('Stickers'))
  console.log('loaded data', data)
  if(data != null){
    ProxyState.stickers = data.stickers.map(s => new Stickers(s))
    ProxyState.tasks = data.tasks.map(t => new Tasks(t))
  }
}