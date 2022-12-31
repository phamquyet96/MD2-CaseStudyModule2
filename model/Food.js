"use strict";
exports.__esModule = true;
exports.Food = void 0;
var Food = /** @class */ (function () {
    function Food(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Food.prototype.getId = function () {
        return this.id;
    };
    Food.prototype.setId = function (value) {
        this.id = value;
    };
    Food.prototype.getName = function () {
        return this.name;
    };
    Food.prototype.setName = function (value) {
        this.name = value;
    };
    Food.prototype.getPrice = function () {
        return this.price;
    };
    Food.prototype.setPrice = function (value) {
        this.price = value;
    };
    return Food;
}());
exports.Food = Food;
