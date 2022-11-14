import { appState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"

export class MoneyController {
    constructor() {
        appState.on('money', _drawMoney)
    }
    addMoney() {
        moneyService.addMoney()
        _drawMoney()
    }
}

function _drawMoney() {
    let totalMoney = moneyService.getMoney()
    document.getElementById('total-money').innerText = totalMoney
}