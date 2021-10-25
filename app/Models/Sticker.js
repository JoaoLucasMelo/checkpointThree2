import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"




export class Stickers {

  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
    this.tasks = data.tasks
    this.completed = data.completed


  }


  get Template() {
  return `
  <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
  <div class="card m-3 text-dark minheight shadow border-top-0 ">
    <div class="a${this.id}e p-1 rounded-top"></div>
      <style>
      .a${this.id}e {
        background-color: ${this.color};
      }
      .a${this.name}e {
        color: ${this.name};
      }
      </style>
    <div class="card-body">
    <div class="d-flex justify-content-between">
      <h5 class="card-title text-center">${this.name}</h5>
      <a title="Delete Sticky Note" class="button selectable bs-danger"
      onclick="app.stickersController.removeSticker('${this.id}')"><i class=" fa-2x fas fa-times"></i></a>
    </div>
    <div class="text-end">
    <p id="checks" class="taskcount" >${this.completed ? this.completed : this.countTasks()}</p>
    </div>  
    <div id="tasks" class="row flex-direction-column">
        ${this.getTasks()}
      </div>
    </div>
    <form onsubmit="app.tasksController.createTask('${this.id}')"
      class="form-floating d-flex m-2 justify-content-between align-items-center">
       <input type="text" class="form-control" minlength="3" maxlength="50" required id="task" placeholder="..." value="" >
        <label class="fst-italic"   for="floatingInputValue">Add New Task</label>
     </form>
  </div>
</div>
`
      }

  getTasks() {

    const tasks = ProxyState.tasks.filter(t => this.id == t.taskId)
    let template = ''
    tasks.forEach(t => {
      template += t.Templatetask
    })
    return template
  }

  countTasks() {
    const tasks = ProxyState.tasks.filter(t => this.id == t.taskId)
    let totalTasks = tasks.length
    let found = tasks.filter(task => task.checked == true)
    let totalComplete = found.length
    console.log(totalComplete)
    return `${totalTasks} Active | ${totalComplete} Checked`
  }
}
