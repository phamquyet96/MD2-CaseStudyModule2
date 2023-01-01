import {ManagerFood} from "../controller/ManagerFood";
import {Food} from "../model/Food";

const readlineSync = require('readline-sync');

export class GuestMenu {
    private GuestFood: ManagerFood = new ManagerFood();
    private guestMenu = `This is Guest. 
                    1.Order food
                    2.Watch the menu
                    3.Delete food
                    4.Payment
                    5.Exit`;

    selection() {
        while (true) {
            let choice;
            do {
                console.log(this.guestMenu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 5) {
                    console.log("Wrong choice. Try again");
                }
            } while (choice < 1 || choice > 5);
            switch (choice) {
                case 1:
                    let id = +readlineSync.question("Enter id: ");
                    let name = readlineSync.question("Enter name: ");
                    let price = +readlineSync.question("Enter price: ");
                    let food = new Food(id, name, price);
                    this.GuestFood.add(food);
                    break;
                case 2:
                    this.GuestFood.showAll();
                    break;
                case 3:
                    let deleteNameFood = readlineSync.question("Enter the name food you wanna delete: ");
                    this.GuestFood.deleteName(deleteNameFood);
                    break;
                case 4:
                    console.log("Total amount of money guest has to pay: "+ this.GuestFood.payment());
                    break;
                case 5:
                    return;
            }
        }
    }
}
