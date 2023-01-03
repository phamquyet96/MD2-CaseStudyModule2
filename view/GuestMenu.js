"use strict";
exports.__esModule = true;
exports.GuestMenu = void 0;
var ManagerFood_1 = require("../controller/ManagerFood");
var GuestManager_1 = require("../controller/GuestManager");
var readlineSync = require('readline-sync');
var GuestMenu = /** @class */ (function () {
    function GuestMenu() {
        this.GuestFood = new GuestManager_1.GuestManager();
        this.guestMenu = "This is Guest. \n                    1.Watch menu\n                    2.Order food\n                    3.Watch list order\n                    4.Delete food\n                    5.Payment\n                    6.Exit";
    }
    GuestMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.guestMenu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 6) {
                    console.log("Wrong choice. Try again");
                }
            } while (choice < 1 || choice > 6);
            switch (choice) {
                case 1:
                    console.table(ManagerFood_1.ManagerFood.listFood);
                    break;
                case 2:
                    var id = +readlineSync.question("Enter id: ");
                    this.GuestFood.order(id);
                    break;
                case 3:
                    console.table(this.GuestFood.showListOrder());
                    break;
                case 4:
                    var deleteNameFood = readlineSync.question("Enter the name food you wanna delete: ");
                    this.GuestFood.deleteOrder(deleteNameFood);
                    break;
                case 5:
                    console.log("Total amount of money guest has to pay: " + this.GuestFood.payment());
                    break;
                case 6:
                    return;
            }
        }
    };
    return GuestMenu;
}());
exports.GuestMenu = GuestMenu;
