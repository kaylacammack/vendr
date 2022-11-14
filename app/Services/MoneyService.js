import { appState } from "../AppState.js";

class MoneyService {
    addMoney(){
        appState.money += .25
    }
    getMoney() {
        return appState.money
    }
}

export const moneyService = new MoneyService()