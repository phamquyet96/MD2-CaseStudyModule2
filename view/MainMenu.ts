import {AdminManager} from "../controller/AdminManager";
import {AdminMenu} from "./AdminMenu";
import {GuestMenu} from "./GuestMenu";

const readlineSync = require('readline-sync');

export class MainMenu {
    private adminMenu: AdminMenu = new AdminMenu();
    private guestMenu: GuestMenu = new GuestMenu();
    private userManager: AdminManager = new AdminManager();
    private menu: string = `
    .....Food Manager Software.....
    1. Login
    2. Register
    3. Exit`

    public selection(): void {
        while (true) {
            let choice;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 3) {
                    console.log("Wrong choice. Try again");
                }
            } while (choice < 1 || choice > 3);
            switch (choice) {
                case 1: {
                    let username = readlineSync.question("Username: ");
                    let password = readlineSync.question("Password: ");
                    let status = this.userManager.login(username, password);
                    if (status == -1) {
                        console.log("Wrong username or password");
                    } else if (status == 0) {
                        this.adminMenu.selection();
                    } else {
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
    }
}