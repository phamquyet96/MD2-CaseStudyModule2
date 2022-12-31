"use strict";
exports.__esModule = true;
exports.AdminManagerFood = void 0;
var AdminManagerFood = /** @class */ (function () {
    function AdminManagerFood() {
        this.listFood = [];
    }
    AdminManagerFood.prototype.add = function (item) {
        this.listFood.push(item);
    };
    AdminManagerFood.prototype.update = function (id, newObject) {
        var index = this.findById(id);
        if (index == -1) {
            return "No exist";
        }
        this.listFood.splice(index, 1, newObject);
    };
    AdminManagerFood.prototype["delete"] = function (id) {
        var index = this.findById(id);
        if (index == -1) {
            return "No exist in the menu";
        }
        this.listFood.splice(index, 1);
    };
    AdminManagerFood.prototype.showAll = function () {
        console.table(this.listFood);
    };
    AdminManagerFood.prototype.findById = function (id) {
        for (var i = 0; i < this.listFood.length; i++) {
            if (this.listFood[i].getId() === id) {
                return i;
            }
        }
        return -1;
    };
    AdminManagerFood.prototype.findByName = function (name) {
        for (var i = 0; i < this.listFood.length; i++) {
            if (this.listFood[i].getName() === name) {
                return i;
            }
        }
        return -1;
    };
    AdminManagerFood.prototype.deleteName = function (name) {
        var index = this.findByName(name);
        if (index == -1) {
            return "No exist in the menu";
        }
        this.listFood.splice(index, 1);
    };
    AdminManagerFood.prototype.payment = function () {
        var sum = 0;
        for (var i = 0; i < this.listFood.length; i++) {
            sum += this.listFood[i].getPrice();
        }
        return sum;
    };
    return AdminManagerFood;
}());
exports.AdminManagerFood = AdminManagerFood;
