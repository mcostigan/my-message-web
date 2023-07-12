import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../service/login.service";

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input [(ngModel)]="username">
    </div>
    <div>
      <input [(ngModel)]="password">
    </div>
    <div>
      <button (click)="login()">Login</button>
    </div>


  `,
  styles: []
})
export class LoginComponent implements OnInit {
  username: string = ''
  password: string = ''

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }


  login() {
    this.loginService.login(this.username, this.password, '')
  }

}
