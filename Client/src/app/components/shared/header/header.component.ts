import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { Notification } from '../../../models/notification.model';

import { CookieService } from 'ngx-cookie';
import { HeaderService } from '../../../services/heeader.service';
import { Router } from '@angular/router';
import { SocketService } from '../../../services/socket.service';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public notifications: Notification[];
  public loggedIn: boolean;
  public unreadMessageCount: number;
  private isAdmin: boolean
  constructor(
    private notificationService: NotificationService,
    private messageService: MessageService,
    private cookieService: CookieService,
    private headerService: HeaderService,
    private router: Router,
    private socketService: SocketService
  ) {
    this.notificationService.notificationsRecieved$.subscribe(data => {
      console.log('recieving notifs from header')
      this.notifications = data;
    });

    this.messageService.messagesRecieved$.subscribe(messages => {
      this.unreadMessageCount = messages.filter(m => m.isRead === false).length;
    });

    this.headerService.loggedIn$.subscribe(data => this.loggedIn = data);
    this.headerService.isAdmin$.subscribe(data => this.isAdmin = data);
  }

  ngOnInit() {
    if(this.cookieService.get('token')){
      this.socketService.connect(this.cookieService.get('userEmail'));
    }
    this.isLoggedIn();
    console.log(this.isAdmin)
  }

  isLoggedIn(): void {
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
    this.loggedIn = false;
    this.isAdmin = false;
    this.socketService.disconnect();
    this.router.navigateByUrl('/home');
  }

}
