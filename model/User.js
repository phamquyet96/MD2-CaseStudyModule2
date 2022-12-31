"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.setUsername = function (value) {
        this.username = value;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setPassword = function (value) {
        this.password = value;
    };
    User.prototype.getRole = function () {
        return this.role;
    };
    User.prototype.setRole = function (value) {
        this.role = value;
    };
    return User;
}());
exports.User = User;
