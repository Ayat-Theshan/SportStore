import { Component } from "@angular/core";
import { Order } from "../model/order.model";
import { OrderRepositery } from "../model/order.repositery";

@Component({
    templateUrl: 'orderTable.component.html'
})

export class OrderTableComponent {
    includeShipped = false;

    constructor(private repository: OrderRepositery){}

    getOrders(): Order[]{
        return this.repository.getOrders()
            .filter(o => this.includeShipped || !o.shipped)
    }

    markShipped(order:Order){
        order.shipped = true;
        this.repository.updateOrder(order);
    }

    delete(id:number | any){
        this.repository.deleteOrder(id)
    }
 }