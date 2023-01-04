import {ManagerFood} from "../controller/ManagerFood";
import {GuestManager} from "../controller/GuestManager";

const readlineSync = require('readline-sync');

export class GuestMenu {
    private GuestFood: GuestManager = new GuestManager();
    private guestMenu = `This is Guest. 
                    1.Watch menu
                    2.Order food
                    3.Watch list order
                    4.Delete food
                    5.Payment
                    6.Exit`;

    selection() {
        while (true) {
            let choice;
            do {
                console.log(this.guestMenu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 6) {
                    console.log("Wrong choice. Try again");
                }
            } while (choice < 1 || choice > 6);
            switch (choice) {
                case 1:
                    console.table(ManagerFood.listFood);
                    break;

                case 2:
                    let id = +readlineSync.question("Enter id: ");
                    this.GuestFood.order(id);
                    break;
                case 3:
                    console.table(this.GuestFood.showListOrder());
                    break;
                case 4:
                    let deleteNameFood = readlineSync.question("Enter the name food you wanna delete: ");
                    this.GuestFood.deleteOrder(deleteNameFood);
                    break;
                case 5:
                    console.log("Total amount of money guest has to pay: "+ this.GuestFood.payment());
                    break;
                case 6:
                    return;
            }
        }
    }
}
