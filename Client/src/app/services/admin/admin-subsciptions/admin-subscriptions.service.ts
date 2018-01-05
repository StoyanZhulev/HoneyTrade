import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Subscription } from "../../../models/subscription.model";


@Injectable()
export class AdminSubscriptionService {
    private subscriptionsSource = new Subject<Subscription[]>();
    public subscriptionsRecieved$ = this.subscriptionsSource.asObservable();

    constructor(
    ){};

    updateSubscriptions(data){
        this.subscriptionsSource.next(data);
    }
}