import { appState } from "../AppState.js";

class SnackService {
    getSnacks() {
        return appState.snacks
    }

    buySnack(snackId) {
        let foundSnack = appState.snacks.find(snack => snack.id === snackId)
        if(appState.money >= foundSnack.price) {
            appState.money -= foundSnack.price  
            alert(`Purchase Successful! ${appState.money} remaining`)
        } else {
            alert(`Do math good dumb dumb! ${foundSnack.price} required for this purchase. ${appState.money} inserted`);
            
        }
    }
}

export const snackService = new SnackService()