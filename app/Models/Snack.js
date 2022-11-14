import { generateId } from "../Utils/generateId.js"

export class Snack {
    constructor(name, imgUrl, price) {
        this.id = generateId()
        this.name = name
        this.imgUrl = imgUrl
        this.price = price
    }
     get snackTemplate() {
        return `
        <div class="card" style="width: 18rem">
        <img src="${this.imgUrl}" class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <button class="btn btn-primary" onclick="app.snackController.buySnack('${this.id}')">$${this.price}</button>
        </div>
        </div>
        `
     }   

}