import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "../../../models/view-models/subscription.model";


@Injectable()
export class AdminSubscriptionService {
    private subscriptionsSource = new BehaviorSubject<Subscription[]>([]);
    public subscriptionsRecieved$ = this.subscriptionsSource.asObservable();

    constructor(
    ){};

    updateSubscriptions(data){
        this.subscriptionsSource.next(data);
    }
}