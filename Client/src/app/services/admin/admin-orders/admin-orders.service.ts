import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Order } from "../../../models/order.model";


@Injectable()
export class AdminOrdersService {
    private ordersSource = new Subject<Order[]>();
    public ordersRecieved$ = this.ordersSource.asObservable();

    constructor(
    ){};

    updateOrders(data){
        console.log(data)
        this.ordersSource.next(data);
    }
}