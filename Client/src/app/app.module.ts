import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { routes } from './app-routing';

import { AppComponent } from './app.component';


import { SharedModule } from './components/shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component'
import { HomeComponent } from './components/home/home.component';

import { UsersComponent } from './components/admin/users/users.component';
import { NotificationsComponent } from './components/admin/notifications/notifications.component';
import { OrdersComponent } from './components/admin/orders/orders.component';



import { HTTP_INTERCEPTORS } from '@angular/common/http'
//import { ErrorInterceptor } from './interceptors/res-err.interceptor';
//import { NotificationInterceptor } from './interceptors/res-notification.interceptor';

import { RouterModule } from '@angular/router';

import { NotificationService } from './services/notification.service';
import { AutorizationService } from './services/auth.service';
import { HeaderService } from './services/heeader.service';
import { SocketService } from './services/socket.service';
import { MessageService } from './services/message.service';
import { TestimonialsService } from './services/testimonials.service';
import { ProductsService } from './services/products.service';
import { HoneyService } from './services/honey.service';
import { CompanyInfoService } from './services/company-info.service';

import { AdminSubscriptionService } from './services/admin/admin-subsciptions/admin-subscriptions.service';
import { AdminUserService } from './services/admin/admin-users/admin-users.service';
import { AdminOrdersService } from './services/admin/admin-orders/admin-orders.service';
import { AdminPartneshipRequestsService } from './services/admin/admin-partnership-requests/admin-partnership-requests.service'


import { AdminGuard } from "./guards/admin.guard";

import { CookieModule, CookieService } from 'ngx-cookie';
import { AuthenticationModule } from './components/auth/auth.module';
 import { AdminModule } from './components/admin/admin.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';


import { MDBBootstrapModules } from 'ng-mdb-pro';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    AdminModule,
    CookieModule.forRoot(),
    MDBBootstrapModules.forRoot()
  ],
  providers: [
    NotificationService,
    CookieService,
    HeaderService,
    MessageService,
    AutorizationService,
    SocketService,
    AdminSubscriptionService,
    AdminUserService,
    AdminOrdersService,
    TestimonialsService,
    AdminPartneshipRequestsService,
    ProductsService,
    HoneyService,
    CompanyInfoService,
    AdminGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: NotificationInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
