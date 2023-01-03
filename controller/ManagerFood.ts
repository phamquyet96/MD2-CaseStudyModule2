import {Food} from "../model/Food";

export class ManagerFood {
    static listFood: Food[] = [];

    add(item: Food): void {ManagerFood.listFood.push(item);
    }

    update(id: number, newObject: Food) {
        let index = this.findById(id);
        if (index == -1) {
            return "No exist";
        }
        ManagerFood.listFood.splice(index, 1, newObject);
    }

    delete(id: any) {
        let index = this.findById(id);
        if (index == -1) {
            return "No exist in the menu";
        }ManagerFood.listFood.splice(index, 1);
    }

    showAll() {
        console.table(ManagerFood.listFood);
    }

    findById(id: number) {
        for (let i = 0; i <ManagerFood.listFood.length; i++) {
            if (ManagerFood.listFood[i].getId() === id) {
                return i;
            }
        }
        return -1;
    }

    findByName(name: string) {
        for (let i = 0; i <ManagerFood.listFood.length; i++) {
            if (ManagerFood.listFood[i].getName() === name) {
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
        ManagerFood.listFood.splice(index, 1);
    }
}
