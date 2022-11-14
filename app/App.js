import { MoneyController } from "./Controllers/MoneyController.js";
import { SnackController } from "./Controllers/SnackController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  moneyController = new MoneyController();
  snackController = new SnackController();
}

window["app"] = new App();
