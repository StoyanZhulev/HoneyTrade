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
import { ResetUserAction } from '../../../store/actions/user.actions';
import { AppState } from '../../../store/state/app-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild(LoginComponent) loginForm: LoginComponent;
  @ViewChild(RegisterComponent) registerForm: RegisterComponent;


  public loggedIn: boolean;
  private isAdmin: boolean;

  constructor(
    private cookieService: CookieService,
    private headerService: HeaderService,
    private router: Router,
    private socketService: SocketService,
    private store: Store<AppState>
  ) {
    this.headerService.loggedIn$.subscribe(data => this.loggedIn = data);
    this.headerService.isAdmin$.subscribe(data => this.isAdmin = data);
  }

  ngOnInit() {
    if (this.cookieService.get('token')) {
      this.socketService.sendEmail(this.cookieService.get('userEmail'));
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

  isAdminLogged(): void {
    if (this.cookieService.get('userRole') === 'admin') {
      this.isAdmin = true;
      this.router.navigateByUrl('/admin');
    } else {
      this.isAdmin = false;
    }
  }

  logout() {
    this.cookieService.removeAll();
    this.headerService.updateLoggedin(false);
    this.headerService.updateisAdmin(false);
    this.loggedIn = false;
    this.isAdmin = false;
    this.store.dispatch(new ResetUserAction());

  }

}
