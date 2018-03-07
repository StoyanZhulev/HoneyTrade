import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable } from "rxjs/Observable";


import { SocketService } from './socket.service';

import { CookieService } from 'ngx-cookie';

const login = 'login';
const signUp = 'register'


@Injectable()
export class AutorizationService {
    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
        private socketService: SocketService
    ) { }

	
	
    registerUser(user) {
        return this.http.post(environment.apiBaseUrl + signUp, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }



    login(userData): Observable<any> {
        return this.http.post<any>(environment.apiBaseUrl + login, userData, {
            headers: {
                'Contet-Type': 'application/json'
            }
         })
    }
}