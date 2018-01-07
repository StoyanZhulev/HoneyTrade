import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';

import { Notification } from '../../../models/notification.model';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  public notifications: Notification[];

  constructor(
    private notificationService: NotificationService,
    private router: Router,
  ) { 
    
  }

  ngOnInit() {
    this.notificationService.notificationsRecieved$.subscribe(data => {
      console.log('recieving notifications from notifications component')
      this.notifications = data
    })
  }


}
