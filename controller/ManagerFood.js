"use strict";
exports.__esModule = true;
exports.ManagerFood = void 0;
var ManagerFood = /** @class */ (function () {
    function ManagerFood() {
        this.listFood = [];
    }
    ManagerFood.prototype.add = function (item) {
        this.listFood.push(item);
    };
    ManagerFood.prototype.update = function (id, newObject) {
        var index = this.findById(id);
        if (index == -1) {
            return "No exist";
        }
        this.listFood.splice(index, 1, newObject);
    };
    ManagerFood.prototype["delete"] = function (id) {
        var index = this.findById(id);
        if (index == -1) {
            return "No exist in the menu";
        }
        this.listFood.splice(index, 1);
    };
    ManagerFood.prototype.showAll = function () {
        console.table(this.listFood);
    };
    ManagerFood.prototype.findById = function (id) {
        for (var i = 0; i < this.listFood.length; i++) {
            if (this.listFood[i].getId() === id) {
                return i;
            }
        }
        return -1;
    };
    ManagerFood.prototype.findByName = function (name) {
        for (var i = 0; i < this.listFood.length; i++) {
            if (this.listFood[i].getName() === name) {
                return i;
            }
        }
        return -1;
    };
    ManagerFood.prototype.deleteName = function (name) {
        var index = this.findByName(name);
        if (index == -1) {
            return "No exist in the menu";
        }
        this.listFood.splice(index, 1);
    };
    ManagerFood.prototype.payment = function () {
        var sum = 0;
        for (var i = 0; i < this.listFood.length; i++) {
            sum += this.listFood[i].getPrice();
        }
        return sum;
    };
    return ManagerFood;
}());
exports.ManagerFood = ManagerFood;
