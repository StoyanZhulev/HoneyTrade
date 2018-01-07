import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { CookieService } from 'ngx-cookie';
import { NotificationService } from './notification.service';
import { MessageService } from './message.service';

import { CompilerConfig } from '@angular/compiler/src/config';
import { AdminSubscriptionService } from './admin/admin-subsciptions/admin-subscriptions.service';
import { AdminOrdersService } from './admin/admin-orders/admin-orders.service';

@Injectable()
export class SocketService {
  private url = 'http://localhost:3000/';
  private socket;


  constructor(
    private cookieService: CookieService,
    private notificationService: NotificationService,
    private messageService: MessageService,
    private adminSubscriptionService: AdminSubscriptionService,
    private adminOrdersService: AdminOrdersService
  ) { }

  disconnect() {
    this.socket.disconnect();
  }

  connect(email: string) {
    this.socket = io(this.url);

    if (email) {
      this.socket.emit('userEmail', email);

      if (email === 'admin@honeymarket.com') {
        this.socket.on('admin-subscribtions', subs => {
          this.adminSubscriptionService.updateSubscriptions(subs);
        })

        this.socket.on('orders', orders => {
          console.log('incomin ordereeeeers')
          this.adminOrdersService.updateOrders(orders);
        })
      }
    }
 
  
    this.socket.on('notifications', nots => {
      console.log('incoming notificationssssss')
      this.notificationService.updateNotifications(nots);
    })

    this.socket.on('messages', count => {
      this.messageService.updateMessages(count);
    })

    return () => {
      this.socket.disconnect();
    };
  }

  sendUserEmail(email) {
    console.log('sending email');
    this.socket.emit('userEmail', email);
  }
}