import {User} from "../model/User";

const readlineSync = require('readline-sync');

export class UserManager {
    private userList: User[] = [];

    constructor() {
        this.userList.push(new User('phamquyet', '123456', 0));
        this.userList.push(new User('phamquyet1', '234567', 0));
        this.userList.push(new User('phamquyet2', '345678', 1));
        this.userList.push(new User('phamquyet3', '456789', 1));
        this.userList.push(new User('phamquyet4', '5678901', 0));
    }

    register() {
        let flag = true;
        let newUserName;
        let newPassword;
        while (flag) {
            newUserName = readlineSync.question("Enter username: ");
            if (!newUserName) {
                console.log("Username cann't be empty!")
            } else {
                flag = false;
            }
        }
        while (!flag) {
            newPassword = readlineSync.question("Enter password: ");
            if (!this.validatePassword(newPassword)) {
                console.log("Password is at least 6 characters and it has to contain lower characters or Upper characters number! ")
            } else {
                flag = true;
            }
        }
        this.userList.push(newUserName, newPassword);
    }

    login(username: string, password: string): number {
        let index = -1;
        this.userList.map((user) => {
            if (user.getUsername() === username && user.getPassword() === password) {
                index = user.getRole();
                return;
            }
        })
        return index;
    }

    validatePassword(password: string): boolean {
        let regex = /^[A-Za-z0-9]{6,}$/;
        return regex.test(password)
    }
}

