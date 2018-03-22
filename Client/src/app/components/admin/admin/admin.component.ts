import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { HeaderService } from '../../../services/heeader.service';
import { SocketService } from '../../../services/socket.service';
import { AdminOrdersService } from '../../../services/admin/admin-orders/admin-orders.service';

import { Router } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { Notification } from '../../../models/view-models/notification.model';
import { AdminUserService } from '../../../services/admin/admin-users/admin-users.service';
import { MessageService } from '../../../services/message.service';
import { TestimonialsService } from '../../../services/testimonials.service';
import { AdminSubscriptionService } from '../../../services/admin/admin-subsciptions/admin-subscriptions.service';
import { ProductsService } from '../../../services/products.service';
import { AdminPartneshipRequestsService } from '../../../services/admin/admin-partnership-requests/admin-partnership-requests.service';
import { HoneyService } from '../../../services/honey.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app-state';
import { ResetUserAction } from '../../../store/actions/user.actions';
import { ResetAdminAction } from '../../../store/actions/subscription.actions';
import {  selectAllUsers, selectAllOrders, selectAllSubscriptions } from '../../../store/reducers/admin-reducer/admin.reducer';
import { selectPartners, selectTestimonials, selectProducts, selectHoneys } from '../../../store/reducers/root-reducers/index';
import { selectUserNotifications, selectUserMessages } from '../../../store/reducers/user-reducers/user.reducer';
import { Message } from '../../../models/view-models/message.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public allUsersCount: number;
  public usersCount: number;
  public beekeepersCount: number;
  public buyersCount: number;
  public partnersCount: number;

  public ordersCount: number;

  public notifications: Notification[];
  public unreadNotifications: number;

  public messages: Message[]
  public unreadMessages: number;

  public testimonialsCount: number;
  public subscriptionsCount: number;
  public productsCount: number;
  public requestsCount: number;
  public honeysCount: number;

  constructor(
    private cookieService: CookieService,
    private headerService: HeaderService,
    private socketService: SocketService,
    private router: Router,
  
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    this.socketService.getAdminState();

    this.store.select(selectAllUsers).subscribe(data => {
      this.allUsersCount = data.count;
      this.usersCount = data.users.length;
      this.beekeepersCount = data.beekeepers.length;
      this.buyersCount = data.buyers.length;
    });

    this.store.select(selectPartners).subscribe(data => {
      this.partnersCount = data.length;
    });

    this.store.select(selectAllOrders).subscribe(data => {
      this.ordersCount = data.length;
    });

    this.store.select(selectTestimonials).subscribe(data => {
      this.testimonialsCount = data.length;
    });

    this.store.select(selectProducts).subscribe(data => {
      this.productsCount = data.length;
    });

    this.store.select(selectHoneys).subscribe(data => {
      this.honeysCount = data.length
    });

    this.store.select(selectAllSubscriptions).subscribe(data => {
      this.subscriptionsCount = data.length;
    });

    this.store.select(selectUserNotifications).subscribe((data: Notification[]) => {
      this.notifications = data.reverse();
      this.unreadNotifications = data.filter(e => e.isRead === false).length;
    })

    this.store.select(selectUserMessages).subscribe((data: Message[]) => {
      this.messages = data.reverse();
      this.unreadMessages = data.filter(e => e.isRead === false).length
    })

    this.router.navigateByUrl('admin/intro')
  }

  logout() {
    this.store.dispatch(new ResetUserAction());
    this.store.dispatch(new ResetAdminAction());
    this.cookieService.removeAll();
    this.headerService.updateLoggedin(false);
    this.headerService.updateisAdmin(false);
  }

}
