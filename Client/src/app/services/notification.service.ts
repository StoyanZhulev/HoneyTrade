import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Notification } from "../models/view-models/notification.model";


@Injectable()
export class NotificationService {
    private notificationSource = new BehaviorSubject<Notification[]>([]);
    public notificationsRecieved$ = this.notificationSource.asObservable();

    constructor(
    ){};

    updateNotifications(data){
        console.log('notifications in service')
        this.notificationSource.next(data);
    }
}