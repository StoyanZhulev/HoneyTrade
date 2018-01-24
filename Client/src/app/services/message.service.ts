import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Message } from "../models/view-models/message.model";


@Injectable()
export class MessageService {
    private messagesSource = new BehaviorSubject<Message[]>([]);
    public messagesRecieved$ = this.messagesSource.asObservable();

    constructor(
    ){};

    updateMessages(data){
        this.messagesSource.next(data);
    }
}