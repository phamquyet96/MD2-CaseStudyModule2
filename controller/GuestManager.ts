import {ManagerFood} from "./ManagerFood";

export class GuestManager{
    guestManager=[];
    order(id:number){
        for(let i=0;i<ManagerFood.listFood.length;i++){
            if(ManagerFood.listFood[i].getId()==id){
                this.guestManager.push(ManagerFood.listFood[i])
            }
        }
    }
    showListOrder(){
        return this.guestManager;
    }
    deleteOrder(name:string){
        let index=this.findByName(name);
        if(index== -1){
            console.log("No food name!");
        }else{
            this.guestManager.splice(index,1)
        }
    }
    findByName(name: string) {
        for (let i = 0; i <this.guestManager.length; i++) {
            if (this.guestManager[i].getName() === name) {
                return i;
            }
        }
        return -1;
    }
    payment() {
        let total = 0;
        for (let i = 0; i <this.guestManager.length; i++) {
            total +=this.guestManager[i].getPrice();
        }
        return total;
    }
}