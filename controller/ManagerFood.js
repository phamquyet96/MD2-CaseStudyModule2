"use strict";
exports.__esModule = true;
exports.ManagerFood = void 0;
var ManagerFood = /** @class */ (function () {
    function ManagerFood() {
    }
    ManagerFood.prototype.add = function (item) {
        ManagerFood.listFood.push(item);
    };
    ManagerFood.prototype.update = function (id, newObject) {
        var index = this.findById(id);
        if (index == -1) {
            return "No exist";
        }
        ManagerFood.listFood.splice(index, 1, newObject);
    };
    ManagerFood.prototype["delete"] = function (id) {
        var index = this.findById(id);
        if (index == -1) {
            return "No exist in the menu";
        }
        ManagerFood.listFood.splice(index, 1);
    };
    ManagerFood.prototype.showAll = function () {
        console.table(ManagerFood.listFood);
    };
    ManagerFood.prototype.findById = function (id) {
        for (var i = 0; i < ManagerFood.listFood.length; i++) {
            if (ManagerFood.listFood[i].getId() === id) {
                return i;
            }
        }
        return -1;
    };
    ManagerFood.listFood = [];
    return ManagerFood;
}());
exports.ManagerFood = ManagerFood;
