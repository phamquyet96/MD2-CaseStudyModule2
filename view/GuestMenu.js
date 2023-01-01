"use strict";
exports.__esModule = true;
exports.GuestMenu = void 0;
var ManagerFood_1 = require("../controller/ManagerFood");
var Food_1 = require("../model/Food");
var readlineSync = require('readline-sync');
var GuestMenu = /** @class */ (function () {
    function GuestMenu() {
        this.GuestFood = new ManagerFood_1.ManagerFood();
        this.guestMenu = "This is Guest. \n                    1.Order food\n                    2.Watch the menu\n                    3.Delete food\n                    4.Payment\n                    5.Exit";
    }
    GuestMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.guestMenu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 5) {
                    console.log("Wrong choice. Try again");
                }
            } while (choice < 1 || choice > 5);
            switch (choice) {
                case 1:
                    var id = +readlineSync.question("Enter id: ");
                    var name_1 = readlineSync.question("Enter name: ");
                    var price = +readlineSync.question("Enter price: ");
                    var food = new Food_1.Food(id, name_1, price);
                    this.GuestFood.add(food);
                    break;
                case 2:
                    this.GuestFood.showAll();
                    break;
                case 3:
                    var deleteNameFood = readlineSync.question("Enter the name food you wanna delete: ");
                    this.GuestFood.deleteName(deleteNameFood);
                    break;
                case 4:
                    console.log("Total amount of money guest has to pay: " + this.GuestFood.payment());
                    break;
                case 5:
                    return;
            }
        }
    };
    return GuestMenu;
}());
exports.GuestMenu = GuestMenu;
