import { StickersController } from "./Controllers/StickersController.js";
import { TasksController } from "./Controllers/TasksController.js";

class App {
  stickersController = new StickersController()
  tasksController = new TasksController()

}

window["app"] = new App();
