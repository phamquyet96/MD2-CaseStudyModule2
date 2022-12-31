import {ManagerFood} from "../controller/ManagerFood";
import {Food} from "../model/Food";

const readlineSync = require('readline-sync');

export class AdminMenu {
    private listAdminFood: ManagerFood = new ManagerFood();
    private adminMenu = `This is Admin.
            1.Creat food
            2.Show List food
            3.Update food
            4.Delete food
            5.Exit`;

    selection() {
        while (true) {
            let choice;
            do {
                console.log(this.adminMenu);
                let temp: number = 0;
                let regex: RegExp = /^[1-5]$/;
                choice = +readlineSync.question("Please choice: ");
                if (regex.test(choice)) {
                    temp = +choice;
                } else {
                    temp = -1;
                }
                if (choice < 1 || choice > 5) {
                    console.log("Wrong choice.Please choice 1-5!");
                }
            } while (choice < 1 || choice > 5);
            switch (choice) {
                case 1:
                    let id = +readlineSync.question("Enter id: ");
                    let name = readlineSync.question("Enter name: ");
                    let price = +readlineSync.question("Enter price: ");
                    let food = new Food(id, name, price);
                    this.listAdminFood.add(food);
                    break;
                case 2:
                    this.listAdminFood.showAll();
                    break;
                case 3:
                    let Id = +readlineSync.question("Enter id you want update: ");
                    let newId = +readlineSync.question("Enter new id: ");
                    let newName = readlineSync.question("Enter new name: ");
                    let newPrice = +readlineSync.question("Enter new price: ");
                    let newFood = new Food(newId, newName, newPrice);
                    this.listAdminFood.update(Id, newFood);
                    break;
                case 4:
                    let deleteId = +readlineSync.question("Enter id you wanna delete: ");
                    this.listAdminFood.delete(deleteId);
                    break;
                case 5:
                    return;
            }
        }

    }
}