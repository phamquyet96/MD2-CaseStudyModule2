"use strict";
exports.__esModule = true;
exports.MainMenu = void 0;
var UserManager_1 = require("../controller/UserManager");
var AdminMenu_1 = require("./AdminMenu");
var GuestMenu_1 = require("./GuestMenu");
var ManagerFood_1 = require("../controller/ManagerFood");
var readlineSync = require('readline-sync');
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.listFood = new ManagerFood_1.ManagerFood();
        this.adminMenu = new AdminMenu_1.AdminMenu();
        this.guestMenu = new GuestMenu_1.GuestMenu();
        this.userManager = new UserManager_1.UserManager();
        this.menu = "\n    1. Login\n    2. Register\n    3. Exit";
    }
    MainMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 3) {
                    console.log("Wrong choice. Try again");
                }
            } while (choice < 1 || choice > 3);
            switch (choice) {
                case 1: {
                    var username = readlineSync.question("Username: ");
                    var password = readlineSync.question("Password: ");
                    var status_1 = this.userManager.login(username, password);
                    if (status_1 == -1) {
                        console.log("Wrong username or password");
                    }
                    else if (status_1 == 0) {
                        this.adminMenu.selection();
                    }
                    else {
                        this.guestMenu.selection();
                    }
                    break;
                }
                case 2: {
                    this.userManager.register();
                    this.guestMenu.selection();
                    this.listFood.showAll();
                    break;
                }
                case 3:
                    return;
            }
        }
    };
    return MainMenu;
}());
exports.MainMenu = MainMenu;
