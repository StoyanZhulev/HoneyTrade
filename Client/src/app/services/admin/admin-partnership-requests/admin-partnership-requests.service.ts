import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { PartnershipRequest } from "../../../models/view-models/partnership-request.model";


@Injectable()
export class AdminPartneshipRequestsService {
    private requestsSource = new BehaviorSubject<PartnershipRequest[]>([]);
    public requestsRecieved$ = this.requestsSource.asObservable();

    constructor(
    ){};

    updateRequests(data){
        this.requestsSource.next(data);
    }
}