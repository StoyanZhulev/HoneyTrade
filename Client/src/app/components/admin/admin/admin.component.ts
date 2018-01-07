import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { HeaderService } from '../../../services/heeader.service';
import { SocketService } from '../../../services/socket.service';
import { AdminOrdersService } from '../../../services/admin/admin-orders/admin-orders.service';
import { Order } from '../../../models/order.model';

import { Router } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { Notification } from '../../../models/notification.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public orders: Order[];
  public notifications: Notification[];
  constructor(
    private cookieService: CookieService,
    private headerService: HeaderService,
    private socketService: SocketService,
    private router: Router,
    private adminOrdersService: AdminOrdersService,
    private notificationService: NotificationService

  ) { 

  }

  ngOnInit() {
    this.adminOrdersService.ordersRecieved$.subscribe(data => {
      console.log('recieving orders from admin component')
      this.orders = data;
    })

    this.notificationService.notificationsRecieved$.subscribe(data => {
      console.log('recieving notifications from admin component')
      this.notifications = data
    })
  }

  logout() {
    console.log('logout admin')
    this.cookieService.removeAll();
    this.headerService.updateLoggedin(false);
    this.headerService.updateisAdmin(false);
    this.socketService.disconnect();
  }

}
