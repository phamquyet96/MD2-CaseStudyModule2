"use strict";
exports.__esModule = true;
exports.GuestManager = void 0;
var ManagerFood_1 = require("./ManagerFood");
var readlineSync = require('readline-sync');
var GuestManager = /** @class */ (function () {
    function GuestManager() {
        this.guestManager = [];
    }
    GuestManager.prototype.order = function (id) {
        for (var i = 0; i < ManagerFood_1.ManagerFood.listFood.length; i++) {
            if (ManagerFood_1.ManagerFood.listFood[i].getId() == id) {
                this.guestManager.push(ManagerFood_1.ManagerFood.listFood[i]);
            }
        }
    };
    GuestManager.prototype.showListOrder = function () {
        return this.guestManager;
    };
    GuestManager.prototype.deleteOrder = function (name) {
        var index = this.findByName(name);
        if (index == -1) {
            console.log("No food name!");
        }
        else {
            this.guestManager.splice(index, 1);
        }
    };
    GuestManager.prototype.findByName = function (name) {
        for (var i = 0; i < this.guestManager.length; i++) {
            if (this.guestManager[i].getName() === name) {
                return i;
            }
        }
        return -1;
    };
    GuestManager.prototype.payment = function () {
        var total = 0;
        for (var i = 0; i < this.guestManager.length; i++) {
            total += this.guestManager[i].getPrice();
        }
        return total;
    };
    return GuestManager;
}());
exports.GuestManager = GuestManager;
