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
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public ordersCount: number;
  public notificationsCount: number;
  public messagesCount: number;
  public usersCount: number;
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
    private adminOrdersService: AdminOrdersService,
    private notificationService: NotificationService,
    private adminUsersService: AdminUserService,
    private messageService: MessageService,
    private testimonialsService: TestimonialsService,
    private adminSubscriptionsService: AdminSubscriptionService,
    private productsService: ProductsService,
    private adminPartnershipRequestsservice: AdminPartneshipRequestsService,
    private honeyService: HoneyService,
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    this.socketService.getAdminState();
    this.adminOrdersService.ordersRecieved$.subscribe(orders => {
      this.ordersCount = orders.length;
    })

    this.notificationService.notificationsRecieved$.subscribe(nots => {
      this.notificationsCount = nots.filter(n => n.isRead === false).length;
    })

    this.messageService.messagesRecieved$.subscribe(messages => {
      this.messagesCount = messages.length;
    })

    this.adminUsersService.usersCountRecieved$.subscribe(usersCount => {
      this.usersCount = usersCount;
    })

    this.testimonialsService.testimonialsRecieved$.subscribe(testimonials => {
      this.testimonialsCount = testimonials.length;
    })

    this.adminSubscriptionsService.subscriptionsRecieved$.subscribe(subs => {
      this.subscriptionsCount = subs.length;
    })

    this.productsService.productsRecieved$.subscribe(prods => {
      this.productsCount = prods.length;
    })

    this.adminPartnershipRequestsservice.requestsRecieved$.subscribe(requests => {
      this.requestsCount = requests.length;
    })

    this.honeyService.honeysRecieved$.subscribe(honeys => {
      this.honeysCount = honeys.length;
    })
  }

  logout() {
    this.store.dispatch(new ResetUserAction());
    this.store.dispatch(new ResetAdminAction());
    this.cookieService.removeAll();
    this.headerService.updateLoggedin(false);
    this.headerService.updateisAdmin(false);
  }

}
