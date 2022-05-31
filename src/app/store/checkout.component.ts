import { Component } from "@angular/core";
import { Order } from "../model/order.model";
import { OrderRepositery } from "../model/order.repositery";
import { NgForm } from "@angular/forms";

@Component({
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})
export class CheckoutComponent {
    orderSent: boolean = false;
    submitted:boolean = false;

    constructor(public order:Order, public repositery:OrderRepositery) {}

    submitOrder(form: NgForm) {
        this.submitted = true;
        if(form.valid){
            this.repositery.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            })
        }
    }


 }