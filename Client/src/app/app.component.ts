import { Component, OnDestroy, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { HeaderService } from './services/heeader.service';
import { Router } from '@angular/router';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit{

  constructor(
    private cookieService: CookieService,
    private headerService: HeaderService,
    private router: Router,
    private socketService: SocketService
  ){
  }
  ngOnInit(){
    this.socketService.connect(null);
  }

  getCookie(key: string): void{
    this.cookieService.get(key);
  }


  ngOnDestroy(): void {
    this.cookieService.removeAll();
  }

}
