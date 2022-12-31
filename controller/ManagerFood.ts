import {ManagerInterface} from "./ManagerInterface";
import {Food} from "../model/Food";

export class ManagerFood implements ManagerInterface {
    private listFood: Food[] = [];

    add(item: Food): void {
        this.listFood.push(item);
    }

    update(id: number, newObject: Food) {
        let index = this.findById(id);
        if (index == -1) {
            return "No exist";
        }
        this.listFood.splice(index, 1, newObject);
    }

    delete(id: any) {
        let index = this.findById(id);
        if (index == -1) {
            return "No exist in the menu";
        }
        this.listFood.splice(index, 1);
    }

    showAll() {
        console.table(this.listFood);
    }

    findById(id: number) {
        for (let i = 0; i < this.listFood.length; i++) {
            if (this.listFood[i].getId() === id) {
                return i;
            }
        }
        return -1;
    }

    findByName(name: string) {
        for (let i = 0; i < this.listFood.length; i++) {
            if (this.listFood[i].getName() === name) {
                return i;
            }
        }
        return -1;
    }

    deleteName(name: string) {
        let index = this.findByName(name);
        if (index == -1) {
            return "No exist in the menu";
        }
        this.listFood.splice(index, 1);
    }

    payment() {
        let sum = 0;
        for (let i = 0; i < this.listFood.length; i++) {
            sum += this.listFood[i].getPrice();
        }
        return sum;
    }
}
