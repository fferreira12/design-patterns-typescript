import { Bacon } from "./bacon";
import { Mozarella } from "./mozzarella";
import { Tomatoe } from "./tomatoe";
import { BasePizza } from "./base-pizza";
import { Pizza } from './pizza';

function getPizzaInfo(pizza: Pizza) {
    console.log('Pizza description: ' + pizza.getDescription());
    console.log('Pizza price: ' + pizza.getPrice());
}

let pizza1 = new Bacon(new Mozarella(new Tomatoe(new BasePizza())));

getPizzaInfo(pizza1);

let pizza2 = new BasePizza();
pizza2 = new Tomatoe(pizza2);
pizza2 = new Mozarella(pizza2);
pizza2 = new Bacon(pizza2);

getPizzaInfo(pizza2);