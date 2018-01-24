import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Notification } from "../models/view-models/notification.model";


@Injectable()
export class HeaderService {
    private loggedInSource = new BehaviorSubject<boolean>(false);
    public loggedIn$ = this.loggedInSource.asObservable();

    
    private isAdminSource = new BehaviorSubject<boolean>(false);
    public isAdmin$ = this.isAdminSource.asObservable();

    constructor(){};

    updateLoggedin(data){
        this.loggedInSource.next(data)
    }

    updateisAdmin(data){
        this.isAdminSource.next(data)
    }
}