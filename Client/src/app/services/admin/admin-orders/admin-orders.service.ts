import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Order } from "../../../models/view-models/order.model";


@Injectable()
export class AdminOrdersService {
    private ordersSource = new BehaviorSubject<Order[]>([]);
    public ordersRecieved$ = this.ordersSource.asObservable();

    constructor(
    ){};

    updateOrders(data){
        this.ordersSource.next(data);
    }
}