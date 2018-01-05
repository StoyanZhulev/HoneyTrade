import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Message } from "../models/message.model";


@Injectable()
export class MessageService {
    private messagesSource = new Subject<Message[]>();
    public messagesRecieved$ = this.messagesSource.asObservable();

    constructor(
    ){};

    updateMessages(data){
        this.messagesSource.next(data);
    }
}