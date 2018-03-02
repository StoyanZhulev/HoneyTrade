import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';


import { Notification } from '../../../models/view-models/notification.model';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public notifications: Notification[];
  public unreadMessageCount: number;

  constructor(
    private notificationService: NotificationService,
    private router: Router,

    private messageService: MessageService,
  ) { 
    
  }

  ngOnInit() {
    this.notificationService.notificationsRecieved$.subscribe(data => {
      this.notifications = data
    })
    this.messageService.messagesRecieved$.subscribe(messages => {
      this.unreadMessageCount = messages.filter(m => m.isRead === false).length;
    });

  }


}
