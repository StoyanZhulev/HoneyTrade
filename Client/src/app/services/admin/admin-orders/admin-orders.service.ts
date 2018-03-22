import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Order } from "../../../models/view-models/order.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { CookieService } from "ngx-cookie";

const GET_ORDERS_BY_YEAR = 'admin/orders/';

@Injectable()
export class AdminOrdersService {
    private ordersSource = new BehaviorSubject<Order[]>([]);
    public ordersRecieved$ = this.ordersSource.asObservable();

    constructor(
        private http: HttpClient,
        private cookieService: CookieService
    ){
    };

    updateOrders(data){
        this.ordersSource.next(data);
    }

    getOrdersByYear(year)
{console.log(year)
        return this.http.get<any>(environment.apiBaseUrl + GET_ORDERS_BY_YEAR + year, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Admin ${this.cookieService.get('token')}`
            }
        })

        // return this.http.get<any>(environment.apiBaseUrl + `admin/buyer/julkata@abv.bg`,{
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Admin ${this.cookieService.get('token')}`
        //     }
        //  })
    }
}