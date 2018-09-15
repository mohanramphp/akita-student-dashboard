import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { LoginDataService } from './login-data.service';
import { User, SessionStore } from './state/index';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private loginDataService: LoginDataService,
    private sessionStore: SessionStore,
    private router: Router
  ) { }

  login(cred) {
    return this.loginDataService.getUser(cred).pipe(
      tap(d => console.log(d)),
      tap(d => this.sessionStore.login(d as User)),
      tap((d) => this.router.navigate(['/']))
    );
  }

  logout() {
    this.sessionStore.logout();
    this.router.navigate(['/login']);
  }
}
