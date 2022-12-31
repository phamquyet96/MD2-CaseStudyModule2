export interface ManagerInterface {
    add(item): void;

    update(id: number, newObject);

    delete(id: number);

    showAll();

    findById(id: number);
}