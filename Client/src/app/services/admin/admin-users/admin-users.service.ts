import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject'


import { SocketService } from '../../socket.service';
import { User } from "../../../models/view-models/users/user.model";
import { Beekeeper } from "../../../models/view-models/users/beekeeper.model";
import { Buyer } from "../../../models/view-models/users/buyer.model";
import { Partner } from "../../../models/view-models/users/partner.model";
import { CookieService } from "ngx-cookie";

@Injectable()
export class AdminUserService {
    private usersCountSource = new BehaviorSubject<number>(0);
    public usersCountRecieved$ = this.usersCountSource.asObservable();

    private usersSource = new BehaviorSubject<User[]>([]);
    public usersRecieved$ = this.usersSource.asObservable();

    private beekeepersSource = new BehaviorSubject<Beekeeper[]>([]);
    public beekeepersRecieved$ = this.beekeepersSource.asObservable();

    private buyersSource = new BehaviorSubject<Buyer[]>([]);
    public buyersRecieved$ = this.buyersSource.asObservable();

    private partnersSource = new BehaviorSubject<Partner[]>([]);
    public partnersRecieved$ = this.partnersSource.asObservable();

    constructor(
        private http: HttpClient,
        private cookieService: CookieService
    ){};

    updateUsersCount(data): void{
        this.usersCountSource.next(data);
    }

    updateUsers(data): void{
        this.usersSource.next(data);
    }

    updateBeekeepers(data): void{
        this.beekeepersSource.next(data);
    }

    updateBuyers(data): void{
        this.buyersSource.next(data);
    }

    updatePartners(data): void{
        this.partnersSource.next(data);
    }

    getUser(email): Observable<any>{
        return this.http.get<any>(environment.apiBaseUrl + `admin/user/${email}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Admin ${this.cookieService.get('token')}`
            }
         })
    }

    getBeekeeper(email): Observable<any>{
        return this.http.get<any>(environment.apiBaseUrl + `admin/beekeeper/${email}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Admin ${this.cookieService.get('token')}`
            }
         })
    }

    getBuyer(email): Observable<any>{
        return this.http.get<any>(environment.apiBaseUrl + `admin/buyer/${email}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Admin ${this.cookieService.get('token')}`
            }
         })
    }

    getPartner(email): Observable<any>{
        return this.http.get<any>(environment.apiBaseUrl + `admin/partner/${email}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Admin ${this.cookieService.get('token')}`
            }
         })
    }

    getUserSubsciptions(email): Observable<any> {
        return this.http.get<any>(environment.apiBaseUrl + `admin/user/${email}/subscriptions`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Admin ${this.cookieService.get('token')}`
            }
         })
    }

}