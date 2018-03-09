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
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app-state';
import { GetTestimonialSuccessAction } from '../store/actions/testimonial.actions';
import { GetProductsSuccessAction } from '../store/actions/product.actions';
import { GetHoneySuccessAction } from '../store/actions/honey.actions';
import { GetCompanyInfoSuccessAction } from '../store/actions/company-info.action';
import { GetUserNotificationsSuccessAction, GetUserMessagesSuccessAction, GetUserSuccessAction, GetUserSubscriptionsSuccessAction, GetAllUsersSuccessAction } from '../store/actions/user.actions';
import { GetPartnersSuccessAction } from '../store/actions/partner.actions';
import { GetSubscriptionsSuccessAction } from '../store/actions/subscription.actions';
import { GetGetAllOrdersSuccessAction } from '../store/actions/order.actions';
import { GetAllPartnershipRequestsSuccessAction } from '../store/actions/partnership-request.actions';

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
    private companyInfoService: CompanyInfoService,

    private store: Store<AppState>
  ) { }

  disconnect() {
    this.socket.disconnect();
  }

  sendEmail(email) {
    this.socket.emit('userEmail', email);
  
  }

  connect() {
    this.socket = io(this.url);

    this.socket.on('testimonials', testimonials => {
      this.store.dispatch(new GetTestimonialSuccessAction(testimonials));
    })

    this.socket.on('products', products => {
      this.store.dispatch(new GetProductsSuccessAction(products));
    })

    this.socket.on('honeys', honeys => {
      this.store.dispatch(new GetHoneySuccessAction(honeys));
    })

    this.socket.on('companyInfo', info => {
      this.store.dispatch(new GetCompanyInfoSuccessAction(info));
    })

    this.socket.on('partners', partners => {
      this.store.dispatch(new GetPartnersSuccessAction(partners))
    })

    //if (email === 'admin@honeymarket.com') {
      this.socket.on('admin-subscriptions', subs => {
        this.store.dispatch(new GetSubscriptionsSuccessAction(subs));
      })

      this.socket.on('admin-orders', orders => {
        this.store.dispatch(new GetGetAllOrdersSuccessAction(orders));
      })

      this.socket.on('admin-partnership-requests', requests => {
        this.store.dispatch(new GetAllPartnershipRequestsSuccessAction(requests));
      })

      this.socket.on('admin-users-count', count => {
        this.adminUsersService.updateUsersCount(count);
      })

      this.socket.on('admin-users', users => {
       this.store.dispatch(new GetAllUsersSuccessAction(users));
      })
   // }

    this.socket.on('notifications', nots => {
      this.store.dispatch(new GetUserNotificationsSuccessAction(nots));
    })

    this.socket.on('messages', messages => {
      this.store.dispatch(new GetUserMessagesSuccessAction(messages))
    })

    this.socket.on('subscriptions', subscr => {
      this.store.dispatch(new GetUserSubscriptionsSuccessAction(subscr))      
    })

    this.socket.on('currentUser', u => {
      this.store.dispatch(new GetUserSuccessAction(u))
    })

    

    return () => {
      this.socket.disconnect();
    };
  }
  getAdminState(){
    this.socket.emit('getAdminState')
  }

  getCurrentUserInfo(email){
    console.log(email)
    this.socket.emit('getCurrentUserInfo', email);
  }
}