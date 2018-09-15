import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { SessionQuery } from '../../login/state/index';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    public sessionQuery: SessionQuery
  ) { }

  ngOnInit() {
  }

  logout() {
    if (confirm('Are you sure to log out?')) {
      this.loginService.logout();
    }
  }

}
