import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { Notification } from '../../../models/view-models/notification.model';

import { CookieService } from 'ngx-cookie';
import { HeaderService } from '../../../services/heeader.service';
import { Router } from '@angular/router';
import { SocketService } from '../../../services/socket.service';
import { MessageService } from '../../../services/message.service';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild(LoginComponent) loginForm: LoginComponent;
  @ViewChild(RegisterComponent) registerForm: RegisterComponent;
  

  public notifications: Notification[];
  public loggedIn: boolean;
  public unreadMessageCount: number;
  private isAdmin: boolean;

  constructor(
    private notificationService: NotificationService,
    private messageService: MessageService,
    private cookieService: CookieService,
    private headerService: HeaderService,
    private router: Router,
    private socketService: SocketService
  ) {
    this.notificationService.notificationsRecieved$.subscribe(data => {
      this.notifications = data;
    });

    this.messageService.messagesRecieved$.subscribe(messages => {
      this.unreadMessageCount = messages.filter(m => m.isRead === false).length;
    });

    this.headerService.loggedIn$.subscribe(data => this.loggedIn = data);
    this.headerService.isAdmin$.subscribe(data => this.isAdmin = data);
  }

  ngOnInit() {
    console.log('in header')
    if(this.cookieService.get('token')){
      console.log('asdasassd')
            this.socketService.sendEmail(this.cookieService.get('userEmail'));
    }
    this.isLoggedIn();
    console.log(this.isAdmin)
  }

  isLoggedIn(): void {
    console.log('asdasdasd')
    if (this.cookieService.get('token')) {
      this.loggedIn = true;
      this.isAdminLogged();
    } else {
      this.loggedIn = false;
    }

  }

  isAdminLogged(): void{
    if (this.cookieService.get('userRole') === 'admin') {
      this.isAdmin = true;
      this.router.navigateByUrl('/admin');
    } else {
      this.isAdmin = false;
    }
  }

  // setNotifications(){
  //   let nots = this.cookieService.getObject('notifications');
  //   if (nots){
  //     this.notifications = Array.from(Object.keys(nots).map(key => key = nots[key]));
  //   }
  // }

  logout() {
    this.cookieService.removeAll();
    this.headerService.updateLoggedin(false);
    this.headerService.updateisAdmin(false);
    this.loggedIn = false;
    this.isAdmin = false;
  }

}
