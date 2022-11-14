import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Snack } from "./Models/Snack.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
  snacks = [new Snack("Doritos",'https://images.albertsons-media.com/is/image/ABS/960543057-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available', 3.75), new Snack("Flaming Hot Mtn Dew", 'https://i5.walmartimages.com/asr/d7ea4693-5e85-4e7a-955d-17389624c41d.af42dcf462b41937ddde5fe48f57f78e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 5.00)]
  money = 0
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
