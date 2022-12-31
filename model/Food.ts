export class Food{
    private id:number;
    private name:string;
    private price:number;


    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getId(): number {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(value: number) {
        this.price = value;
    }
}