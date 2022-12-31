"use strict";
exports.__esModule = true;
exports.AdminMenu = void 0;
var ManagerFood_1 = require("../controller/ManagerFood");
var Food_1 = require("../model/Food");
var readlineSync = require('readline-sync');
var AdminMenu = /** @class */ (function () {
    function AdminMenu() {
        this.listAdminFood = new ManagerFood_1.ManagerFood();
        this.adminMenu = "This is Admin.\n            1.Creat food\n            2.Show List food\n            3.Update food\n            4.Delete food\n            5.Exit";
    }
    AdminMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.adminMenu);
                var temp = 0;
                var regex = /^[1-5]$/;
                choice = +readlineSync.question("Please choice: ");
                if (regex.test(choice)) {
                    temp = +choice;
                }
                else {
                    temp = -1;
                }
                if (choice < 1 || choice > 5) {
                    console.log("Wrong choice.Please choice 1-5!");
                }
            } while (choice < 1 || choice > 5);
            switch (choice) {
                case 1:
                    var id = +readlineSync.question("Enter id: ");
                    var name_1 = readlineSync.question("Enter name: ");
                    var price = +readlineSync.question("Enter price: ");
                    var food = new Food_1.Food(id, name_1, price);
                    this.listAdminFood.add(food);
                    break;
                case 2:
                    this.listAdminFood.showAll();
                    break;
                case 3:
                    var Id = +readlineSync.question("Enter id you want update: ");
                    var newId = +readlineSync.question("Enter new id: ");
                    var newName = readlineSync.question("Enter new name: ");
                    var newPrice = +readlineSync.question("Enter new price: ");
                    var newFood = new Food_1.Food(newId, newName, newPrice);
                    this.listAdminFood.update(Id, newFood);
                    break;
                case 4:
                    var deleteId = +readlineSync.question("Enter id you wanna delete: ");
                    this.listAdminFood["delete"](deleteId);
                    break;
                case 5:
                    return;
            }
        }
    };
    return AdminMenu;
}());
exports.AdminMenu = AdminMenu;
