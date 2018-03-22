import { Component, OnInit, ViewChild } from '@angular/core';
import { AutorizationService } from '../../../services/auth.service';
import { CompilerConfig } from '@angular/compiler/src/config';
import { HeaderService } from '../../../services/heeader.service';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { SocketService } from '../../../services/socket.service';
import { AppState } from '../../../store/state/app-state';
import { Store } from '@ngrx/store';
import { GetUserSuccessAction } from '../../../store/actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  @ViewChild('loginForm') public loginFormModal;

  private model: {
    email: string,
    password: string
  } = { email: '', password: '' }

  constructor(
    private authService: AutorizationService,
    private headerService: HeaderService,
    private cookieService: CookieService,
    private router: Router,
    private socketService: SocketService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  public login() {
    console.log('login')
    console.log(this.model)
    this.authService.login(this.model).subscribe(data => {
      this.loginFormModal.hide()
      this.cookieService.put('token', data.token);
      this.cookieService.put('userEmail', data.user.email);
      this.cookieService.put('userRole', data.user.role);
      this.headerService.updateLoggedin(true);
      this.store.dispatch(new GetUserSuccessAction(data.user))
      if (this.cookieService.get('userRole') === 'admin') {
        this.headerService.updateisAdmin(true);
        this.router.navigateByUrl('/admin');
      } else {
        this.router.navigateByUrl('/home');
      }
      this.socketService.sendEmail(data.user.email);
      
    }
    );
  }


  show() {
    this.loginFormModal.show();
  }

  reset(){
    this.model.email = '';
    this.model.password = '';
  }

}