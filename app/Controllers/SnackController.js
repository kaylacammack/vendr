import { snackService } from "../Services/SnackService.js"
import { setHTML } from "../Utils/Writer.js"

export class SnackController {
    constructor(){
        _drawSnacks()
    }
    buySnack(snackId) {
        _buySnack(snackId)
    }
}

function _drawSnacks(){
    let template = ''
    let snacks = snackService.getSnacks()
    snacks.forEach(s => template += s.snackTemplate)
    setHTML('snacks', template)
}

function _buySnack(snackId) {
    snackService.buySnack(snackId)
}