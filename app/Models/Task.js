import { generateId } from "../Utils/generateId.js"

export class Tasks {
  constructor(data) {
    this.id = data.id || generateId()
    this.task = data.task
    this.checked = data.checked
    this.taskId = data.taskId

  }

get Templatetask(){
  return `
  <div class="col-1">
  <div class="form-check">
    <input class="form-check-input" autocomplete="off" type="checkbox" onclick="app.tasksController.checkBox('${this.id}')" name="${this.id}" id="${this.id}" ${this.checked ? 'checked' :''}>
    <label class="form-check-label" for="defaultCheck1"></label>
  </div>
  </div>
  <div class="col-8 pe-0">
   <p class="m-0 ">${this.task}</p>
  </div>
  <div class="col-3 p-0 text-end pe-3">
  <a id="remove" title="Delete Task" class="button bs-danger selectable"  onclick="app.tasksController.removeTask('${this.id}')"><i class="fas fa-minus"></i></a>
  </div>
  `
}
}