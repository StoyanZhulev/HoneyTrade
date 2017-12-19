import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { routes } from './app-routing';

import { AppComponent } from './app.component';


import { SharedModule } from './components/shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component'
import { HomeComponent } from './components/home/home.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http'
//import { ErrorInterceptor } from './interceptors/res-err.interceptor';
//import { NotificationInterceptor } from './interceptors/res-notification.interceptor';

import { RouterModule } from '@angular/router';

import { NotificationService } from './services/notification.service';
import { AutorizationService } from './services/auth.service';
import { HeaderService } from './services/heeader.service';
import { SocketService } from './services/socket.service';



import { CookieModule, CookieService } from 'ngx-cookie';
import { AuthenticationModule } from './components/auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    CookieModule.forRoot(),
    AuthenticationModule
  ],
  providers: [
    NotificationService,
    CookieService,
    HeaderService,
    AutorizationService,
    SocketService,
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