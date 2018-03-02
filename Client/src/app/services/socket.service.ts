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
import { AdminUserService } from './admin/admin-users/admin-users.service';
import { TestimonialsService } from './testimonials.service';
import { ProductsService } from './products.service';
import { AdminPartneshipRequestsService } from './admin/admin-partnership-requests/admin-partnership-requests.service';
import { HoneyService } from './honey.service';
import { CompanyInfoService } from './company-info.service';

@Injectable()
export class SocketService {
  private url = 'http://localhost:3000/';
  private socket;


  constructor(
    private cookieService: CookieService,
    private notificationService: NotificationService,
    private messageService: MessageService,
    private adminSubscriptionService: AdminSubscriptionService,
    private adminOrdersService: AdminOrdersService,
    private adminUsersService: AdminUserService,
    private TestimonialsService: TestimonialsService,
    private productsService: ProductsService,
    private adminPartnershipRequestsService: AdminPartneshipRequestsService,
    private honeyService: HoneyService,
    private companyInfoService: CompanyInfoService
  ) { }

  disconnect() {
    this.socket.disconnect();
  }

  connect(email: string) {
    this.socket = io(this.url);

    if (email) {
      this.socket.emit('userEmail', email);

      if (email === 'admin@honeymarket.com') {
        this.socket.on('admin-subscriptions', subs => {
          this.adminSubscriptionService.updateSubscriptions(subs);
        })

        this.socket.on('admin-orders', orders => {
          this.adminOrdersService.updateOrders(orders);
        })

        this.socket.on('admin-partnership-requests', requests => {
          this.adminPartnershipRequestsService.updateRequests(requests)
        })

        this.socket.on('admin-users-count', count => {
          this.adminUsersService.updateUsersCount(count);
        })

        this.socket.on('admin-users', users => {
          this.adminUsersService.updateUsers(users);
        })

        this.socket.on('admin-beekeepers', users => {
          this.adminUsersService.updateBeekeepers(users);
        })

        this.socket.on('admin-buyers', users => {
          this.adminUsersService.updateBuyers(users);
        })

        this.socket.on('admin-partners', users => {
          this.adminUsersService.updatePartners(users);
        })
      }

      this.socket.on('notifications', nots => {
        this.notificationService.updateNotifications(nots);
      })
  
      this.socket.on('messages', count => {
        this.messageService.updateMessages(count);
      })
    }
 
    this.socket.on('testimonials', testimonials => {
      this.TestimonialsService.updateTestimonials(testimonials);
    })
  
    this.socket.on('products', products => {
      this.productsService.updateProducts(products);
    })

    this.socket.on('honeys', honeys => {
      this.honeyService.updateHoneys(honeys);
    })

    this.socket.on('companyInfo', info => {
      this.companyInfoService.updateCompanyInfo(info);
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