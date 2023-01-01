export interface ManagerInterface {
    add(item): void;

    update(id: number, newObject);

    delete(id: number);

    showAll();

    findById(id: number);

    findByName(name: string);

    deleteName(name: string);

    payment();
}