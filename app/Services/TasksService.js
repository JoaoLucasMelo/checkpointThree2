import { ProxyState } from "../AppState.js"
import { Tasks } from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js";



class TasksService {
  createTask(taskData) {

    const task = new Tasks(taskData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  }

  checkBox(sId) {
    const tasks = ProxyState.tasks
    const box = tasks.find(task => sId == task.id)
    box.checked = !box.checked
    ProxyState.tasks = ProxyState.tasks
    saveState()
  }

  removeTask(id) {
    if (window.confirm('Are you sure? Press OK to Delete')) {
      ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.taskId != id)
    }


  }
}

export const tasksService = new TasksService();