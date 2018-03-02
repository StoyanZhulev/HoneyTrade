import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { NotificationService } from '../../services/notification.service';
import { CookieService } from 'ngx-cookie';
import { HeaderService } from '../../services/heeader.service';
import { Router } from '@angular/router';
import { SocketService } from '../../services/socket.service';
import { Notification } from '../../models/view-models/notification.model';
import { AdminOrdersService } from '../../services/admin/admin-orders/admin-orders.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public unreadNotificationsCount: number;
  public loggedIn: boolean;
  public unreadMessageCount: number;
  public ordersCount; number;
  private isAdmin: boolean ;

  constructor(
    private notificationService: NotificationService,
    private messageService: MessageService,
    private cookieService: CookieService,
    private headerService: HeaderService,
    private router: Router,
    private socketService: SocketService,
    private adminOrdersService: AdminOrdersService,
  ) {
    this.notificationService.notificationsRecieved$.subscribe(data => {
      this.unreadNotificationsCount = data.filter(m => m.isRead === false).length;;
    });

    this.messageService.messagesRecieved$.subscribe(messages => {
      this.unreadMessageCount = messages.filter(m => m.isRead === false).length;
    });

    this.headerService.loggedIn$.subscribe(data => this.loggedIn = data);
    this.headerService.isAdmin$.subscribe(data => this.isAdmin = data);

    this.adminOrdersService.ordersRecieved$.subscribe(data => {
      this.ordersCount = data.length
    })
   }

  ngOnInit() {
    if(this.cookieService.get('token')){
      this.socketService.connect(this.cookieService.get('userEmail'));
    }
    this.isLoggedIn();
    console.log('admin ' + this.isAdmin)
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
      console.log('in is admin else')
      this.isAdmin = false;
    }
  }

  logout() {
    console.log('logout admin')
    this.cookieService.removeAll();
    this.headerService.updateLoggedin(false);
    this.headerService.updateisAdmin(false);
    this.socketService.disconnect();
    this.router.navigateByUrl('/home');
  }
}
