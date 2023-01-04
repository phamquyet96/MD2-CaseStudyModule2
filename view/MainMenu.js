"use strict";
exports.__esModule = true;
exports.MainMenu = void 0;
var AdminManager_1 = require("../controller/AdminManager");
var AdminMenu_1 = require("./AdminMenu");
var GuestMenu_1 = require("./GuestMenu");
var readlineSync = require('readline-sync');
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.adminMenu = new AdminMenu_1.AdminMenu();
        this.guestMenu = new GuestMenu_1.GuestMenu();
        this.userManager = new AdminManager_1.AdminManager();
        this.menu = "\n    .....Food Manager Software.....\n    1. Login\n    2. Register\n    3. Exit";
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
