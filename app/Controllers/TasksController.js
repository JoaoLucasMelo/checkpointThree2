import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"



export class TasksController {
  constructor() {

  }

  createTask(sId) {
    window.event.preventDefault()
    const formElem = window.event.target
    let taskData = {
      task: formElem.task.value,
      taskId: sId,
      checked: false
    }
    tasksService.createTask(taskData)
  }

  removeTask(id) {
    tasksService.removeTask(id)
  }

  checkBox(sId) {
    tasksService.checkBox(sId)
  }


}