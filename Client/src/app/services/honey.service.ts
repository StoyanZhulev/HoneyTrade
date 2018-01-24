import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Honey } from "../models/view-models/honey.model";


@Injectable()
export class HoneyService {
    private honeysSource = new BehaviorSubject<Honey[]>([]);
    public honeysRecieved$ = this.honeysSource.asObservable();

    constructor(
    ){};

    updateHoneys(data){
        this.honeysSource.next(data);
    }
}