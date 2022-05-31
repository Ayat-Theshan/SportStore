import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Order } from "./order.model";
import { OrderRepositery } from "./order.repositery";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [
    ProductRepository, 
    Cart, 
    Order, 
    OrderRepositery,
    AuthService,
    RestDataSource,
    {provide: StaticDataSource, useClass:RestDataSource}
]
})
export class ModelModule { }